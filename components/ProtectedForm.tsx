import React, { useState, FormEvent } from 'react';
import { ClientOnly } from 'vite-react-ssg';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ProtectedFormProps {
  formspreeEndpoint: string;
  subject: string;
  colorClass?: string;
  showMessage?: boolean;
  submitButtonText: string;
}

const serviceOptions = [
  'SEO consult',
  'Technical SEO audit',
  'Shopify SEO',
  'Google Merchant Center SEO',
  'Google Business Profile / Local SEO',
  'Local citations / directories',
  'SEO writing / blog content',
  'B2B SEO',
  'AI SEO / GEO',
  'Backlinks / PR / authority',
  'YouTube SEO',
  'Reddit / social SEO',
  'Programmatic SEO',
  'Other',
];

const FormContent: React.FC<ProtectedFormProps> = ({
  formspreeEndpoint,
  subject,
  colorClass = 'primary',
  showMessage = false,
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

    // Capture form data and form ref BEFORE disabling inputs — disabled fields are excluded from FormData
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

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
            htmlFor="url"
          >
            Website URL
          </label>
          <input
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
            id="url"
            name="website"
            placeholder="mysite.com"
            type="url"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="email"
          >
            Business Email
          </label>
          <input
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
            id="email"
            name="email"
            placeholder="you@company.com"
            type="email"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="group">
        <label
          className="block text-sm font-semibold text-slate-700 mb-2"
          htmlFor="service"
        >
          What do you need help with?
        </label>
        <select
          className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all text-base`}
          id="service"
          name="service"
          required
          disabled={isSubmitting}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {showMessage && (
        <div className="group">
          <label
            className="block text-sm font-semibold text-slate-700 mb-2"
            htmlFor="message"
          >
            Biggest Challenge
          </label>
          <textarea
            className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 h-28 resize-none text-base`}
            id="message"
            name="message"
            placeholder="What's your biggest SEO challenge right now?"
            disabled={isSubmitting}
          />
        </div>
      )}

      <button
        className={`w-full bg-primary text-white font-bold text-lg py-5 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : submitButtonText}
      </button>

      {submitStatus === 'success' && (
        <p className="text-center text-green-600 font-medium">
          Thank you. I will review it and reply with next steps.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="text-center text-red-600 font-medium">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export const ProtectedForm: React.FC<ProtectedFormProps> = (props) => {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdUym4sAAAAAH7-MgGMCadlrdecy7COFvsMgBxx';

  return (
    <ClientOnly>
      {() => (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
          <FormContent {...props} />
        </GoogleReCaptchaProvider>
      )}
    </ClientOnly>
  );
};
