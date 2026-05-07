import React from 'react';
import { Linkedin, Mail, MessageCircle, Twitter, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const links = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, icon: Youtube },
  { label: 'Reddit', href: SOCIAL_LINKS.reddit, icon: MessageCircle },
  { label: 'X', href: SOCIAL_LINKS.twitter, icon: Twitter },
  { label: 'Email', href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
];

interface SocialIconLinksProps {
  compact?: boolean;
}

export const SocialIconLinks: React.FC<SocialIconLinksProps> = ({ compact = false }) => (
  <div className="flex flex-wrap gap-2">
    {links.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        aria-label={label}
        title={label}
        className={`inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white font-bold text-slate-700 transition hover:border-[#108a00] hover:text-[#108a00] ${
          compact ? 'h-9 w-9' : 'gap-2 px-3 py-2 text-sm'
        }`}
      >
        <Icon className="h-4 w-4" />
        {!compact && <span>{label}</span>}
      </a>
    ))}
  </div>
);
