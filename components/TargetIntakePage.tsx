import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Clock, Target } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';

const TITLE = 'Target Finder Intake | Zechariah Tokar';
const DESC = 'Send the few details I need to find your single best local lead target.';

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

export const TargetIntakePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/target-intake' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/target-intake" />
      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Target Finder intake
        </div>

        <section className="bp-intake-hero">
          <div className="wrap bp-intake-grid">
            <div>
              <span className="eyebrow">Thanks for your order</span>
              <h1>Send the few details I need to find your best target.</h1>
              <p className="lede">Tell me your website, your main service, the areas you serve, and the kind of client you most want more of. That is all I need to get to work.</p>
              <div className="bp-intake-steps">
                <span><ClipboardCheck size={18} strokeWidth={2} />Submit intake</span>
                <span><Target size={18} strokeWidth={2} />I research your best target</span>
                <span><Clock size={18} strokeWidth={2} />You get it in ~2 business days</span>
              </div>
            </div>
            <div className="cta-card form-card bp-intake-card">
              <ProtectedForm
                formspreeEndpoint={FORMSPREE_ENDPOINT}
                subject="Target Finder intake"
                submitButtonText="Submit intake"
                showMessage={true}
                messageLabel="Your Best Client"
                messagePlaceholder="What kind of client do you most want more of, and where?"
                extraFields={<IntakeExtraFields />}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
