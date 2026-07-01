import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, ClipboardCheck, Clock, CreditCard, FileText, Lock, Video } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';

const TITLE = 'Blueprint Intake | Local Demand Capture Blueprint | Zechariah Tokar';
const DESC = 'Submit the details Zechariah needs to prepare your Local Demand Capture Blueprint.';
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/8x2aEQ1f7auX00rcYv6c00S';
const paidSessionKey = 'isf_blueprint_paid_redirect';

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
  const location = useLocation();
  const cancelled = new URLSearchParams(location.search).get('cancelled') === '1';
  const paid = new URLSearchParams(location.search).get('paid') === '1';
  const [canSubmitIntake, setCanSubmitIntake] = useState(false);

  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/blueprint-intake' });
  }, []);

  useEffect(() => {
    if (paid) {
      window.sessionStorage.setItem(paidSessionKey, '1');
      setCanSubmitIntake(true);
      return;
    }
    setCanSubmitIntake(window.sessionStorage.getItem(paidSessionKey) === '1');
  }, [paid]);

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
              <p className="lede">Once Stripe sends you back here after payment, use this form to share your website, main service, target locations, and the visibility problem you want me to solve first.</p>
              {cancelled && (
                <div className="bp-cancel-note">
                  Checkout was cancelled. You can still send the site first if you want me to check fit before you buy.
                </div>
              )}
              <div className="bp-intake-steps">
                <span><ClipboardCheck size={18} strokeWidth={2} />Submit intake</span>
                <span><FileText size={18} strokeWidth={2} />I research</span>
                <span><Video size={18} strokeWidth={2} />You get the doc and Loom</span>
                <span><Clock size={18} strokeWidth={2} />3 to 5 business days</span>
              </div>
            </div>
            {canSubmitIntake ? (
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
            ) : (
              <div className="bp-payment-gate">
                <Lock size={28} strokeWidth={1.8} />
                <h2>Complete checkout first.</h2>
                <p>This intake form is for paid Local Demand Capture Blueprint purchases. Stripe will send you back here after payment.</p>
                <a className="btn btn-primary" href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                  Pay $250 on Stripe <ArrowUpRight size={17} strokeWidth={2} />
                </a>
                <div className="bp-payment-note">
                  <CreditCard size={17} strokeWidth={2} />
                  <span>No tax is configured for this checkout link.</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
