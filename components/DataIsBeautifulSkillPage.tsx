import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Download, FileText, Sparkles } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'Free DataIsBeautiful Claude Skill | Reddit Data Visualization Prompt | Zechariah Tokar';
const DESC = 'Download a free Claude skill for planning Reddit-ready data visualizations with angles, titles, methodology notes, and quality checks.';

export const DataIsBeautifulSkillPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: TITLE,
      description: DESC,
      path: '/resources/dataisbeautiful-claude-skill',
    });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/resources/dataisbeautiful-claude-skill" />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          Resources<span>/</span>DataIsBeautiful Claude skill
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">Free Claude skill</span>
            <h1>Plan better Reddit data visualizations before you build the chart.</h1>
            <p className="answer">
              This free Claude skill helps you turn a topic into a sharper r/dataisbeautiful-style chart idea. It pushes Claude to find the human angle, choose a simple chart format, write source notes, and check the final package before you post.
            </p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="/downloads/dataisbeautiful-claude-skill.md" download>
                Download the skill <Download size={18} />
              </a>
              <a className="btn btn-ghost" href="#how-it-works">How to use it</a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="svc-grid">
              <article className="svc">
                <div className="ic"><Sparkles size={24} /></div>
                <h3>Find the angle first</h3>
                <p>Claude scores ideas by broad interest, data fit, visual strength, and likely discussion risk.</p>
              </article>
              <article className="svc">
                <div className="ic"><FileText size={24} /></div>
                <h3>Package the post</h3>
                <p>It asks for a title, chart note, source note, method, limitations, and calm replies to likely critiques.</p>
              </article>
              <article className="svc">
                <div className="ic"><Download size={24} /></div>
                <h3>Use it in Claude</h3>
                <p>Download the Markdown file, paste it into Claude, and add your topic or dataset.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="divider" id="how-it-works">
          <div className="narrow">
            <h2 className="block">How to use it</h2>
            <p>
              Open Claude, paste the skill text, then add the topic you want to explore. Ask for an angle menu before asking for a chart. Once you choose an angle, give Claude the real data source or dataset and have it produce the chart plan, title, source notes, and quality checklist.
            </p>
            <p>
              The public version is cleaned for general use. It does not include private client examples, local file paths, posting workflows, or personal operating rules.
            </p>
            <div className="pills" style={{ marginTop: '22px' }}>
              <a href="/downloads/dataisbeautiful-claude-skill.md" download>Download Markdown</a>
              <a href="/downloads/dataisbeautiful-claude-skill.md" target="_blank" rel="noopener noreferrer">Open text file</a>
            </div>
          </div>
        </section>
      </div>

      <ContactCTA
        subject="New Inquiry from DataIsBeautiful Claude Skill Resource"
        title="Want this turned into a real chart or content asset?"
        body="Send the topic, dataset, or page you want to support. I will reply with the practical next step."
        submitButtonText="Send my idea"
      />
    </>
  );
};
