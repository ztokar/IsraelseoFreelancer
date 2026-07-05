import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Clock, Rocket } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';

const TITLE = 'Project Kickoff | Local Authority System | Zechariah Tokar';
const DESC = 'Send the details I need to start building your done-for-you local lead system.';

const IntakeExtraFields = () => (
  <div className="bp-intake-fields">
    <div className="group">
      <label htmlFor="main-service">Main Service</label>
      <input id="main-service" name="main_service" placeholder="ABA therapy, home care, real estate" type="text" required />
    </div>
    <div className="group">
      <label htmlFor="target-locations">Target Locations</label>
      <input id="target-locations" name="target_locations" placeholder="Cities or service areas" type="text" required />
    </div>
  </div>
);

export const SystemIntakePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/system-intake' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/system-intake" />
      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Project kickoff
        </div>

        <section className="bp-intake-hero">
          <div className="wrap bp-intake-grid">
            <div>
              <span className="eyebrow">Thanks, let's build it</span>
              <h1>Send the details I need to start your build.</h1>
              <p className="lede">Share your website, main service, the areas you serve, and what a great month of leads would look like. I will review everything and reach out to kick off.</p>
              <div className="bp-intake-steps">
                <span><ClipboardCheck size={18} strokeWidth={2} />Submit kickoff details</span>
                <span><Rocket size={18} strokeWidth={2} />I map targets and pages</span>
                <span><Clock size={18} strokeWidth={2} />I reach out within 1 business day</span>
              </div>
            </div>
            <div className="cta-card form-card bp-intake-card">
              <ProtectedForm
                formspreeEndpoint={FORMSPREE_ENDPOINT}
                subject="Local Authority System kickoff"
                submitButtonText="Submit kickoff details"
                showMessage={true}
                messageLabel="Your Goal"
                messagePlaceholder="What would a great month of leads look like for you?"
                extraFields={<IntakeExtraFields />}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
