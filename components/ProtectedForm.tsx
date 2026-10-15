import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { ClientOnly } from 'vite-react-ssg';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

interface ProtectedFormProps {
  formspreeEndpoint: string;
  subject: string;
  colorClass?: string;
  showMessage?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
  extraFields?: React.ReactNode;
  submitButtonText: string;
}

const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const clickIdFields = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const;

const classifyReferrer = (referrer: string) => {
  if (!referrer) return '';

  const hostname = (() => {
    try {
      return new URL(referrer).hostname.toLowerCase();
    } catch {
      return referrer.toLowerCase();
    }
  })();

  if (/(chatgpt|openai|perplexity|claude|anthropic|gemini|bard|copilot|you\.com|phind)/.test(hostname)) {
    return 'ai_search';
  }

  if (/(google|bing|duckduckgo|yahoo|yandex|baidu|ecosia|brave)/.test(hostname)) {
    return 'organic_search';
  }

  return 'referral';
};

const readAttribution = () => {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const firstLandingPageKey = 'isf_first_landing_page';
  const firstReferrerKey = 'isf_first_referrer';

  let firstLandingPage = window.location.href;
  let firstReferrer = document.referrer || '';
  try {
    firstLandingPage = window.sessionStorage.getItem(firstLandingPageKey) || firstLandingPage;
    firstReferrer = window.sessionStorage.getItem(firstReferrerKey) ?? firstReferrer;
    window.sessionStorage.setItem(firstLandingPageKey, firstLandingPage);
    window.sessionStorage.setItem(firstReferrerKey, firstReferrer);
  } catch {
    // Restricted storage must not stop someone from sending an enquiry.
  }
  const landingParams = new URL(firstLandingPage).searchParams;

  const attribution: Record<string, string> = {
    form_page: window.location.pathname,
    landing_page: firstLandingPage,
    referrer: firstReferrer,
    current_url: window.location.href,
  };

  [...utmFields, ...clickIdFields].forEach((field) => {
    attribution[field] = params.get(field) || landingParams.get(field) || '';
  });

  attribution.search_channel_hint = classifyReferrer(attribution.referrer);

  return attribution;
};

const appendAttributionFields = (formData: FormData, attribution: Record<string, string>) => {
  Object.entries(attribution).forEach(([key, value]) => {
    formData.set(key, value);
  });
};

const pushLeadEvent = (payload: Record<string, string>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_form_submit',
    ...payload,
  });
};

const FormContent: React.FC<ProtectedFormProps> = ({
  formspreeEndpoint,
  subject,
  colorClass = 'primary',
  showMessage = false,
  messageLabel = 'Biggest Challenge',
  messagePlaceholder = "What's your biggest SEO challenge right now?",
  extraFields,
  submitButtonText
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Please try again or email directly.');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error('reCAPTCHA not loaded');
      setSubmitStatus('error');
      setErrorMessage('The verification check did not load. Please refresh and try again.');
      return;
    }

    // Capture form data before disabling inputs because disabled fields are excluded from FormData.
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const attribution = readAttribution();
    const formSource = subject || submitButtonText || 'SEO quote form';
    const selectedService = String(formData.get('service') || '');

    appendAttributionFields(formData, {
      ...attribution,
      form_source: formSource,
      selected_service: selectedService,
    });

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('Something went wrong. Please try again or email directly.');

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptcha('contact_form');

      formData.append('g-recaptcha-response', token);

      // Submit to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        pushLeadEvent({
          form_source: formSource,
          form_page: attribution.form_page,
          landing_page: attribution.landing_page,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
          search_channel_hint: attribution.search_channel_hint,
          selected_service: selectedService,
        });
        formElement.reset();
      } else {
        try {
          const responseData = await response.json();
          const firstError = responseData?.errors?.[0]?.message;
          const formspreeError = responseData?.error;
          if (firstError || formspreeError) {
            setErrorMessage(firstError || formspreeError);
          }
        } catch {
          // Keep the default message if the response is not JSON.
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value={subject} />

      {/* Honeypot field - hidden from users, catches bots */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="url"
          >
            Website URL
          </label>
          <input
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
            id="url"
            name="website"
            placeholder="https://mysite.com"
            type="url"
            autoComplete="url"
            onBlur={(event) => {
              const value = event.currentTarget.value.trim();
              if (value && !/^[a-z][a-z\d+.-]*:/i.test(value)) {
                event.currentTarget.value = `https://${value}`;
              }
            }}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
            id="email"
            name="email"
            placeholder="you@company.com"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      {extraFields}

      {showMessage && (
        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="message"
          >
            {messageLabel}
          </label>
          <textarea
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 h-28 resize-none text-base`}
            id="message"
            name="message"
            placeholder={messagePlaceholder}
            required
            disabled={isSubmitting}
          />
        </div>
      )}

      <button
        className={`w-full bg-primary text-white font-bold text-lg py-5 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          isSubmitting || !executeRecaptcha ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        type="submit"
        disabled={isSubmitting || !executeRecaptcha}
      >
        {isSubmitting ? 'Sending...' : !executeRecaptcha ? 'Preparing secure form...' : submitButtonText}
      </button>

      {submitStatus === 'success' && (
        <p role="status" className="text-center text-green-600 font-medium">
          Thank you. I will review it and reply with next steps.
        </p>
      )}

      {submitStatus === 'error' && (
        <p role="alert" className="text-center text-red-600 font-medium">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

const NearbyForm: React.FC<ProtectedFormProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const [nearby, setNearby] = useState(false);
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdUym4sAAAAAH7-MgGMCadlrdecy7COFvsMgBxx';
  useEffect(() => {
    if (!container.current) return;
    if (!('IntersectionObserver' in window)) {
      setNearby(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearby(true);
        observer.disconnect();
      }
    }, { rootMargin: '800px' });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={container} style={{ minHeight: props.showMessage ? 570 : 380 }}>
    {nearby ? <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey} scriptProps={{ async: true, defer: true }}>
      <FormContent {...props} />
    </GoogleReCaptchaProvider> : <p role="status">Loading contact form...</p>}
  </div>;
};

export const ProtectedForm: React.FC<ProtectedFormProps> = (props) => (
    <ClientOnly>
      {() => <NearbyForm {...props} />}
    </ClientOnly>
);
