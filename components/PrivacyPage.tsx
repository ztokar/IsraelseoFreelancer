import React from 'react';
import { HeadSEO } from '../utils/seo';
import { Section, List } from './lean/Blocks';

// Plain description of what the site's own code collects. Draft for Zechariah to confirm before it goes live.
export const PrivacyPage: React.FC = () => (
  <div className="lp">
    <HeadSEO title="Privacy" description="What israelseofreelancer.com collects when you send a form, book a call or buy an offer, and who processes it." path="/privacy" />
    <section className="lh"><div className="lwrap"><h1>Privacy</h1>
      <p className="lh-answer">This site collects only what you send in a form, a booking or a payment, plus standard visit statistics. Zechariah Tokar runs the site and reads every message himself.</p>
    </div></section>
    <Section h2="What is collected" answer="Only what you choose to send, and anonymous visit data.">
      <List items={[
        '**Contact forms:** your website, email, the issue you describe and any message. Sent through Formspree and protected by Google reCAPTCHA.',
        '**Bookings:** your name, email and the time you pick, handled by the booking page at book.israelseofreelancer.com.',
        '**Payments:** offers are paid on Stripe. Card details go to Stripe, never to this site. After paying you fill in a Google Form with your project details.',
        '**Visit statistics:** Google Tag Manager loads Google Analytics and an X (Twitter) ads tag a few seconds after a page loads.',
      ]} />
    </Section>
    <Section h2="How it is used" answer="To reply to you, do the work you asked for, and see which pages help visitors.">
      <List items={[
        'Your details are not sold or passed to anyone else for marketing.',
        'Embedded videos load from YouTube when you play them.',
        'To see, change or delete what you sent, email [zechariah@israelseofreelancer.com](mailto:zechariah@israelseofreelancer.com).',
      ]} />
    </Section>
  </div>
);
