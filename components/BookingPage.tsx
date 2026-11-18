import React, { useEffect } from 'react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';

// His rule (2026-11-18): nobody books a meeting directly. They message first; he sets up a call if it fits.
// The old calendar embed (book.israelseofreelancer.com) was removed the same day because that server no longer answers.
const TITLE = 'Talk to Zechariah Tokar | SEO Consultation';
const DESCRIPTION = 'Message Zechariah Tokar about your website, SEO, AI search or Reddit. A paid SEO consultation or audit is $250.';

export const BookingPage: React.FC = () => {
  useEffect(() => { updatePageSEO({ title: TITLE, description: DESCRIPTION, path: '/book', image: '/images/zechariah-tokar-outdoors.webp' }); }, []);
  return (
    <div className="rb">
      <HeadSEO title={TITLE} description={DESCRIPTION} path="/book" image="/images/zechariah-tokar-outdoors.webp" />
      <section className="hero"><div className="wrap">
        <h1>Talk to me</h1>
        <p className="lead">Message me first. If it’s a fit, I’ll set up a call.</p>
        <dl className="glance">
          <div><dt>Step 1</dt><dd>Send me your site and what you need</dd></div>
          <div><dt>Step 2</dt><dd>I reply and tell you if I can help</dd></div>
          <div><dt>Step 3</dt><dd>If it fits, we set a time to talk</dd></div>
          <div><dt>Consultation or audit</dt><dd>$250</dd></div>
        </dl>
      </div></section>
      <section id="contact" className="sec"><div className="wrap cols">
        <div>
          <h2>Send me a message</h2>
          <p className="ans">Tell me about your site and what you want SEO to fix first.</p>
          <p className="sub">Already a client? Use the same form, or message me the way we usually talk.</p>
        </div>
        <div className="rbform">
          <ProtectedForm
            formspreeEndpoint={FORMSPREE_ENDPOINT}
            subject="New Inquiry: wants to talk"
            submitButtonText="Send message"
            showMessage
            messageLabel="What do you want to talk about?"
            messagePlaceholder="Your site, what is not working, and what you want from a call"
            extraFields={<input type="hidden" name="service" value="Consultation request" />}
          />
        </div>
      </div></section>
    </div>
  );
};
