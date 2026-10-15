"""Exercise real local UI paths with explicitly mocked CAPTCHA and form transport."""
import argparse
from email import policy
from email.parser import BytesParser
import json
from pathlib import Path

from playwright.sync_api import sync_playwright, expect

parser = argparse.ArgumentParser()
parser.add_argument('--base', default='http://127.0.0.1:4174')
parser.add_argument('--out', required=True)
args = parser.parse_args()
out = Path(args.out)
out.mkdir(parents=True, exist_ok=True)
slugs = ['ai-visibility-audit', 'geo-content-optimization', 'ai-visibility-tracking-services', 'chatgpt-ads-management']
records = []
payloads = []
reply = {'status': 200, 'body': {'ok': True}}

def receive(route):
    request = route.request
    mime = BytesParser(policy=policy.default).parsebytes(
        b'Content-Type: ' + request.headers['content-type'].encode() + b'\r\n\r\n' + request.post_data_buffer
    )
    fields = {part.get_param('name', header='content-disposition'): part.get_content() for part in mime.iter_parts()}
    fields.pop('g-recaptcha-response', None)
    payloads.append(fields)
    route.fulfill(status=reply['status'], content_type='application/json', body=json.dumps(reply['body']), headers={'Access-Control-Allow-Origin': '*'})

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 390, 'height': 844})
    context.route('https://www.google.com/recaptcha/api.js*', lambda route: route.fulfill(
        content_type='application/javascript', body="window.grecaptcha={ready:callback=>callback(),execute:()=>Promise.resolve('local-test-token')};"
    ))
    context.route('https://formspree.io/f/mpwvyzbr', receive)
    page = context.new_page()
    console_errors = []
    page.on('pageerror', lambda error: console_errors.append(str(error)))
    for index, slug in enumerate(slugs):
        suffix = '?utm_source=chatgpt&utm_medium=paid&utm_campaign=qa-test&gclid=qa-click' if index == 0 else ''
        page.goto(args.base + '/' + slug + suffix, wait_until='networkidle')
        recaptcha_before_scroll = page.evaluate("performance.getEntriesByType('resource').some(item=>item.name.includes('recaptcha/api.js'))")
        page.locator('#contact').scroll_into_view_if_needed()
        name = page.get_by_label('Name', exact=True)
        expect(name).to_be_visible()
        submit = page.get_by_role('button', name='Send my site', exact=True)
        before = len(payloads)
        submit.click()
        assert len(payloads) == before, 'Empty form reached transport'
        assert not page.locator('form').evaluate('(form) => form.checkValidity()')
        name.fill('Website QA test')
        page.get_by_label('Website URL', exact=True).fill('example.com')
        page.get_by_label('Email', exact=True).fill('form-test@example.com')
        page.locator('textarea[name="message"]').fill('LOCAL QA TEST ONLY. No real enquiry.')
        assert page.get_by_label('Website URL', exact=True).input_value() == 'https://example.com'
        submit.click()
        expect(page.get_by_role('status').filter(has_text='Thank you')).to_be_visible(timeout=15000)
        payload = payloads[-1]
        assert payload.get('name') == 'Website QA test' and payload.get('email') == 'form-test@example.com'
        assert payload.get('service') and payload.get('selected_service') == payload['service']
        assert payload.get('utm_source') == 'chatgpt' and payload.get('gclid') == 'qa-click'
        assert page.evaluate("window.dataLayer.some(item=>item.event==='lead_form_submit')")
        assert name.input_value() == ''
        assert not page.evaluate('document.documentElement.scrollWidth > innerWidth')
        page.screenshot(path=str(out / f'{slug}-form-success.png'), full_page=False)
        records.append({'page': slug, 'required_fields': True, 'url_normalized': True, 'success_ui': True, 'payload_fields_preserved': True, 'service_label': payload['service'], 'campaign_attribution_preserved': True, 'lead_event': True, 'captcha_deferred': not recaptcha_before_scroll})

    reply.update(status=422, body={'errors': [{'message': 'Test rejection: please try again.'}]})
    page.get_by_label('Name', exact=True).fill('Website QA error test')
    page.get_by_label('Website URL', exact=True).fill('https://example.com')
    page.get_by_label('Email', exact=True).fill('form-test@example.com')
    page.locator('textarea[name="message"]').fill('LOCAL QA ERROR TEST ONLY.')
    submit.click()
    expect(page.get_by_role('alert')).to_have_text('Test rejection: please try again.')
    assert submit.is_enabled()
    assert page.get_by_label('Name', exact=True).input_value() == 'Website QA error test'
    page.screenshot(path=str(out / 'form-error-feedback.png'))

    reply.update(status=200, body={'ok': True})
    isolated = context.new_page()
    isolated.add_init_script("Object.defineProperty(window,'sessionStorage',{get(){throw new DOMException('Blocked storage','SecurityError')}})")
    isolated.goto(args.base + '/ai-visibility-audit', wait_until='networkidle')
    isolated.locator('#contact').scroll_into_view_if_needed()
    isolated.get_by_label('Name', exact=True).fill('Restricted storage QA')
    isolated.get_by_label('Website URL', exact=True).fill('https://example.com')
    isolated.get_by_label('Email', exact=True).fill('form-test@example.com')
    isolated.locator('textarea[name="message"]').fill('LOCAL STORAGE TEST ONLY.')
    isolated.get_by_role('button', name='Send my site', exact=True).click()
    expect(isolated.get_by_role('status').filter(has_text='Thank you')).to_be_visible(timeout=15000)
    result = {'pass': not console_errors, 'transport': 'mocked locally, not production delivery', 'pages': records, 'server_error_preserves_input': True, 'restricted_storage_submission': True, 'page_errors': console_errors, 'captured_payloads': payloads}
    (out / 'results.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps({key: value for key, value in result.items() if key != 'captured_payloads'}, indent=2))
    browser.close()
