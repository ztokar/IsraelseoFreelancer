import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import './booking.css';

const TITLE = 'Book a Meeting with Zechariah Tokar';
const DESCRIPTION = 'Choose a time to talk with Zechariah about your website, SEO, AI search, or Reddit. Check availability and book a Google Meet call.';
const MEETINGS = {
  consultation: {
    slug: 'consultation', title: TITLE, description: DESCRIPTION,
    heading: 'Find a time that works for you.',
    lead: 'Tell me what you’re working on. We’ll talk through your website, what needs to improve, and whether I can help.',
    calendarHeading: 'Book a conversation.',
  },
  client: {
    slug: 'client-meeting', title: 'Book a Client Meeting with Zechariah Tokar',
    description: 'Choose a time to review our work, ask questions, and agree on what happens next.',
    heading: 'Let’s talk through the next step.',
    lead: 'Choose a time to review our work, ask questions, and agree on what happens next.',
    calendarHeading: 'Choose our next meeting.',
  },
  weekly: {
    slug: 'weekly-check-in', title: 'Book Weekly Meetings with Zechariah Tokar',
    description: 'Choose a starting time for our weekly check-ins. You can review the dates before you confirm.',
    heading: 'Make time for a regular check-in.',
    lead: 'Choose a starting time for our weekly check-ins. You can review the dates before you confirm.',
    calendarHeading: 'Choose your weekly meeting time.',
  },
};

export const BookingPage: React.FC = () => {
  const { search } = useLocation();
  const [meeting, setMeeting] = useState<keyof typeof MEETINGS>('consultation');
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const details = MEETINGS[meeting];
  const bookingUrl = `https://book.israelseofreelancer.com/zechariah/${details.slug}`;

  useEffect(() => {
    const requested = new URLSearchParams(search).get('meeting');
    setMeeting(requested === 'client' || requested === 'weekly' ? requested : 'consultation');
    setLoaded(false);
    setSlow(false);
  }, [search]);

  useEffect(() => {
    updatePageSEO({ title: details.title, description: details.description, path: '/book', image: '/images/service-audit-zechariah.webp' });
  }, [details]);

  useEffect(() => {
    if (loaded) return;
    const timeout = window.setTimeout(() => setSlow(true), 15000);
    return () => window.clearTimeout(timeout);
  }, [attempt, loaded, meeting]);

  const retry = () => {
    setLoaded(false);
    setSlow(false);
    setAttempt((value) => value + 1);
  };

  return <>
    <HeadSEO title={details.title} description={details.description} path="/book" image="/images/service-audit-zechariah.webp" />
    <article className="gp booking-page">
      <section className="booking-intro">
        <div className="wrap booking-intro-grid">
          <div>
            <span className="eyebrow">Let’s talk</span>
            <h1>{details.heading}</h1>
            <p className="booking-lead">{details.lead}</p>
            <div className="booking-person">
              <img src="/images/service-audit-zechariah.webp" width="72" height="72" alt="Zechariah Tokar" />
              <div><strong>Zechariah Tokar</strong><span>SEO, AI search &amp; Reddit</span></div>
            </div>
          </div>
          <aside className="booking-details" aria-label="About the call">
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/></svg><span>Choose an available date and time below.</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="6" width="12" height="12" rx="3"/><path d="m15 10 6-3v10l-6-3"/></svg><span>Meet online with Google Meet.</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/></svg><span>Check the time zone shown in the calendar.</span></div>
          </aside>
        </div>
      </section>

      <section className="booking-calendar-section" aria-labelledby="booking-calendar-title">
        <div className="wrap">
          <div className="booking-calendar-heading">
            <div><span className="eyebrow">Your next step</span><h2 id="booking-calendar-title">{details.calendarHeading}</h2></div>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Open calendar in a new tab <span aria-hidden="true">↗</span></a>
          </div>
          <div className="booking-frame-shell">
            {!loaded && <div className="booking-loading" role="status" aria-live="polite">
              <div className="booking-skeleton" aria-hidden="true"><span/><span/><span/></div>
              <p>{slow ? 'Taking longer than expected. You can open the calendar above or try again.' : 'Loading available times…'}</p>
              {slow && <button type="button" onClick={retry}>Try again</button>}
            </div>}
            <iframe key={`${meeting}-${attempt}`} src={`${bookingUrl}/embed?embed=&theme=light&layout=month_view`} title="Choose a meeting time with Zechariah Tokar" className="booking-frame" onLoad={() => setLoaded(true)} onError={() => setSlow(true)} allow="payment" />
          </div>
          <p className="booking-help">Have a question before booking? <a href="mailto:zack.tokar@gmail.com">Email me</a>.</p>
        </div>
      </section>
    </article>
  </>;
};
