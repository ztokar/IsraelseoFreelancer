import React from 'react';
import { ProtectedForm } from './ProtectedForm';

interface ContactCTAProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  subject: string;
  submitButtonText?: string;
  id?: string;
}

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwvyzbr';

export const ContactCTA: React.FC<ContactCTAProps> = ({
  eyebrow = 'Send your site',
  title = 'Tell me what you want SEO to fix first.',
  body = 'Share your site, your email, and the issue you want solved. I will review it and reply with the practical next step.',
  subject,
  submitButtonText = 'Send my site',
  id = 'contact',
}) => (
  <div className="gp">
    <section className="gp-cta contact-cta" id={id}>
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="tag2">Quick intake</span>
            <h3>What to send</h3>
            <ul>
              <li>Your website</li>
              <li>The main SEO issue</li>
              <li>What a good lead or sale looks like</li>
            </ul>
          </div>
          <div className="cta-card form-card">
            <ProtectedForm
              formspreeEndpoint={FORMSPREE_ENDPOINT}
              subject={subject}
              submitButtonText={submitButtonText}
              showMessage={true}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);
