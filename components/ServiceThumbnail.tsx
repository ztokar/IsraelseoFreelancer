import React from 'react';
import {
  BarChart3,
  Bot,
  Briefcase,
  FileSearch,
  Globe2,
  Link2,
  MapPin,
  MessageCircle,
  PenLine,
  Play,
  Search,
  ShoppingBag,
  Store,
  Youtube,
} from 'lucide-react';

interface ServiceThumbnailProps {
  visual?: string;
  title: string;
}

const iconMap: Record<string, React.ElementType> = {
  writing: PenLine,
  audit: FileSearch,
  consulting: Search,
  monthly: BarChart3,
  b2b: Briefcase,
  shopify: Store,
  merchant: ShoppingBag,
  local: MapPin,
  citations: Globe2,
  ai: Bot,
  reddit: MessageCircle,
  redditMarketing: MessageCircle,
  redditExpert: Search,
  redditPosting: PenLine,
  social: MessageCircle,
  youtube: Youtube,
  links: Link2,
  programmatic: BarChart3,
  pr: Play,
};

const thumbnailData: Record<string, {
  headline: string;
  main: string;
  bullets: string[];
  color: string;
  glow: string;
  bars: number[];
}> = {
  writing: {
    headline: 'SEO CONTENT',
    main: 'WRITING',
    bullets: ['Service pages', 'BOFU content', 'Content refreshes', 'Search intent'],
    color: 'text-sky-300',
    glow: 'bg-sky-400/20',
    bars: [28, 42, 58],
  },
  audit: {
    headline: 'TECHNICAL SEO',
    main: 'AUDIT',
    bullets: ['GSC checks', 'Indexing fixes', 'Site structure', 'Quick wins'],
    color: 'text-cyan-300',
    glow: 'bg-cyan-400/20',
    bars: [32, 48, 64],
  },
  consulting: {
    headline: 'SEO',
    main: 'CONSULT',
    bullets: ['Priorities', 'Roadmap', 'Second opinion', 'Clear next steps'],
    color: 'text-lime-300',
    glow: 'bg-[#10C988]/20',
    bars: [24, 42, 56],
  },
  monthly: {
    headline: 'MONTHLY',
    main: 'SEO WORK',
    bullets: ['Content', 'Tech fixes', 'Authority', 'Reporting'],
    color: 'text-emerald-300',
    glow: 'bg-emerald-400/20',
    bars: [30, 46, 66],
  },
  b2b: {
    headline: 'B2B SEO',
    main: 'PIPELINE',
    bullets: ['Use-case pages', 'Comparison pages', 'Buyer-intent content', 'US market fit'],
    color: 'text-lime-300',
    glow: 'bg-[#10C988]/20',
    bars: [26, 48, 70],
  },
  shopify: {
    headline: 'SHOPIFY',
    main: 'STORE SEO',
    bullets: ['Collection pages', 'Product SEO', 'Technical cleanup', 'Merchant feed help'],
    color: 'text-emerald-300',
    glow: 'bg-emerald-400/20',
    bars: [30, 52, 68],
  },
  merchant: {
    headline: 'GOOGLE',
    main: 'MERCHANT SEO',
    bullets: ['Feed cleanup', 'Product titles', 'Shopping surfaces', 'Disapproval checks'],
    color: 'text-sky-300',
    glow: 'bg-sky-400/20',
    bars: [28, 44, 62],
  },
  local: {
    headline: 'LOCAL SEO',
    main: 'MAPS + GBP',
    bullets: ['Google Business Profile', 'Local pages', 'Maps visibility', 'Review signals'],
    color: 'text-green-300',
    glow: 'bg-green-400/20',
    bars: [22, 44, 64],
  },
  citations: {
    headline: 'LOCAL',
    main: 'CITATIONS',
    bullets: ['NAP cleanup', 'Directories', 'Local profiles', 'Trust signals'],
    color: 'text-teal-300',
    glow: 'bg-teal-400/20',
    bars: [26, 38, 54],
  },
  ai: {
    headline: 'AI SEO',
    main: 'GEO VISIBILITY',
    bullets: ['AI citations', 'Entity signals', 'Reddit mentions', 'Search visibility'],
    color: 'text-violet-300',
    glow: 'bg-violet-400/20',
    bars: [34, 52, 70],
  },
  reddit: {
    headline: 'REDDIT SEO',
    main: 'THREADS',
    bullets: ['Forum visibility', 'Brand mentions', 'SERP threads', 'AI search support'],
    color: 'text-orange-300',
    glow: 'bg-orange-400/20',
    bars: [24, 40, 58],
  },
  redditMarketing: {
    headline: 'REDDIT',
    main: 'MARKETING',
    bullets: ['Subreddit fit', 'Buyer objections', 'Search support', 'Clean strategy'],
    color: 'text-orange-300',
    glow: 'bg-orange-400/20',
    bars: [28, 48, 66],
  },
  redditExpert: {
    headline: 'REDDIT',
    main: 'EXPERT',
    bullets: ['Strategy review', 'Thread research', 'Risk checks', 'AI visibility'],
    color: 'text-amber-300',
    glow: 'bg-amber-400/20',
    bars: [24, 46, 64],
  },
  redditPosting: {
    headline: 'REDDIT',
    main: 'POSTING',
    bullets: ['Post angles', 'Native wording', 'Review pass', 'No spam'],
    color: 'text-rose-300',
    glow: 'bg-rose-400/20',
    bars: [22, 42, 60],
  },
  social: {
    headline: 'SOCIAL SEO',
    main: 'POSTING',
    bullets: ['LinkedIn posts', 'Search signals', 'Distribution', 'Brand trust'],
    color: 'text-rose-300',
    glow: 'bg-rose-400/20',
    bars: [26, 44, 60],
  },
  youtube: {
    headline: 'YOUTUBE SEO',
    main: 'VIDEO SEARCH',
    bullets: ['Video titles', 'Descriptions', 'Topic clusters', 'Search intent'],
    color: 'text-red-300',
    glow: 'bg-red-400/20',
    bars: [24, 36, 56],
  },
  links: {
    headline: 'WHITE HAT SEO',
    main: 'BACKLINKS',
    bullets: ['Relevant mentions', 'Manual link review', 'Authority cleanup', 'No spam packages'],
    color: 'text-sky-300',
    glow: 'bg-sky-400/20',
    bars: [28, 46, 66],
  },
  programmatic: {
    headline: 'PROGRAMMATIC',
    main: 'SEO PAGES',
    bullets: ['Templates', 'Useful data', 'Internal links', 'Indexing control'],
    color: 'text-lime-300',
    glow: 'bg-[#10C988]/20',
    bars: [34, 50, 68],
  },
  pr: {
    headline: 'PR SEO',
    main: 'MENTIONS',
    bullets: ['Press mentions', 'Brand search', 'Third-party proof', 'AI visibility'],
    color: 'text-yellow-300',
    glow: 'bg-yellow-400/20',
    bars: [26, 42, 62],
  },
};

export const ServiceThumbnail: React.FC<ServiceThumbnailProps> = ({ visual = 'audit', title }) => {
  const data = thumbnailData[visual] || thumbnailData.audit;
  const Icon = iconMap[visual] || Search;

  return (
    <div className="relative h-48 overflow-hidden rounded-xl bg-[#0F1115] p-4 text-white shadow-sm">
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#10C988]/25 blur-sm" />
      <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#0BA66C]/15 blur-sm" />

      <div className="relative z-10 grid h-full grid-cols-[1fr_74px] gap-3">
        <div className="min-w-0">
          <div className="flex items-start gap-2">
            <Icon className="mt-1 h-8 w-8 shrink-0 text-[#10C988]" />
            <div className="min-w-0">
              <p className="text-[1.25rem] font-black italic leading-none tracking-tight text-[#10C988]">
                {data.headline}
              </p>
              <p className="text-[1.55rem] font-black italic leading-none tracking-tight text-white">
                {data.main}
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            {data.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-1.5 text-[10.5px] font-black uppercase italic leading-3.5 text-white">
                <span className="text-base leading-none text-[#10C988]">+</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-end">
          <div className="absolute right-0 top-8 h-14 w-20 rotate-[-18deg] rounded-full border-t-4 border-[#10C988]" />
          <div className="mb-1 flex items-end gap-1.5">
            {data.bars.map((height, index) => (
              <span
                key={`${title}-${height}`}
                className={`w-4 rounded-t-sm bg-[#10C988] ${index === 0 ? 'opacity-70' : ''}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
