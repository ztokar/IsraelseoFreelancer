import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Clock, FileText, Video } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';

const TITLE = 'Blueprint Intake | Local Demand Capture Blueprint | Zechariah Tokar';
const DESC = 'Submit the details Zechariah needs to prepare your Local Demand Capture Blueprint.';

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

export const BlueprintIntakePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/blueprint-intake' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/blueprint-intake" />
      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Blueprint intake
        </div>

        <section className="bp-intake-hero">
          <div className="wrap bp-intake-grid">
            <div>
              <span className="eyebrow">Blueprint intake</span>
              <h1>Send the details I need to build your local search strategy.</h1>
              <p className="lede">Use this form to share your website, main service, target locations, and the visibility problem you want me to solve first.</p>
              <div className="bp-intake-steps">
                <span><ClipboardCheck size={18} strokeWidth={2} />Submit intake</span>
                <span><FileText size={18} strokeWidth={2} />I research</span>
                <span><Video size={18} strokeWidth={2} />You get the doc and Loom</span>
                <span><Clock size={18} strokeWidth={2} />3 to 5 business days</span>
              </div>
            </div>
            <div className="cta-card form-card bp-intake-card">
              <ProtectedForm
                formspreeEndpoint={FORMSPREE_ENDPOINT}
                subject="Local Demand Capture Blueprint intake"
                submitButtonText="Submit blueprint intake"
                showMessage={true}
                messageLabel="Biggest Visibility Challenge"
                messagePlaceholder="What are you trying to show up for, and what feels stuck right now?"
                extraFields={<IntakeExtraFields />}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
