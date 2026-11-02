import React, { useEffect } from 'react';
import { HeadSEO, updatePageSEO } from '../../utils/seo';
import { ContactCTA } from '../ContactCTA';
import { Faq, LeanHero, List, Receipts, Section, Steps, Table } from './Blocks';
import { R } from '../../content/claims';

const TITLE = 'What Is Reddit SEO? Rank in Google Threads and AI Answers';
const DESC = 'Reddit SEO, defined: getting Reddit threads that mention your brand to rank in Google and feed ChatGPT and Google AI Overviews. How it works and how to do it without bans.';

// Term home for "Reddit SEO": the definition comes first, the tie-back to the service is in the page end.
export const RedditSeoPage: React.FC = () => {
  useEffect(() => { updatePageSEO({ title: TITLE, description: DESC, path: '/reddit-seo' }); }, []);
  return (
    <div className="lp">
      <HeadSEO title={TITLE} description={DESC} path="/reddit-seo" image="/images/proof-reddit-405k.jpg" />
      <LeanHero
        h1="What Is Reddit SEO?"
        answer="Reddit SEO is the work of getting Reddit threads that mention your brand to rank in Google and feed AI answers. It is about being present, helpfully, in the threads buyers already read, not about links."
        photo={{ src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'Reddit post statistics: 405,000 views, 518 upvotes, 217 comments', caption: 'One organic post by Zechariah Tokar: 405,000 views.' }}
        glance={[
          ['Where it shows', 'Google results (often in Discussions and forums), ChatGPT and Google AI Overviews'],
          ['What it is not', 'Link building: Reddit links are nofollow'],
          ['What it needs', 'Useful answers in the right subreddits, from accounts with history'],
          ['The risk', 'Removed posts and banned accounts when it reads like an ad'],
        ]}
      />
      <Section id="why-it-works" h2="Why Reddit threads rank and get quoted" answer="Google rewards first-hand discussion, and AI answers lean on the same threads when buyers ask for the best option.">
        <Table head={['Where', 'What happens', 'What it means for a brand']} rows={[
          ['Google', 'Reddit threads rank near the top for many "best" and recommendation searches', 'A helpful mention in a ranking thread keeps getting read'],
          ['AI answers', 'ChatGPT and Google AI Overviews often pull from Reddit threads', 'Being discussed honestly makes you more likely to be named'],
          ['Buyers', 'People add "reddit" to searches to find real opinions', 'What threads say about you is part of your search results'],
        ]} />
      </Section>
      <Section id="how" h2="How to do Reddit SEO" answer="Find the threads that already win your buyers' searches, then add something useful." tone="tint">
        <Steps items={[
          { h: 'Find ranking threads', p: 'Search Google for your buyer\'s question plus "reddit" and note the threads that show.' },
          { h: 'Read the subreddit', p: 'Its rules, what moderators remove, and how members answer similar questions.' },
          { h: 'Answer, then mention', p: 'Give a real answer first; name the brand only where it helps the person asking.' },
          { h: 'Watch the thread', p: 'Replies keep a thread alive; check back and answer follow-up questions.' },
        ]} />
      </Section>
      <Section id="proof" h2="Proof" answer="The same method produced these posts.">
        <Receipts items={[R.r405, R.r12]} />
      </Section>
      <Section id="faq" h2="Questions people ask" tone="tint">
        <Faq items={[
          { q: 'Do Reddit links help SEO?', a: 'Not directly. Reddit links are nofollow. The value is the thread ranking in Google and being read by buyers and AI tools.' },
          { q: 'Can a brand post on Reddit at all?', a: 'Yes, where the subreddit allows it and the post helps. Read the rules first; many subreddits limit self-promotion.' },
          { q: 'Does Reddit SEO help with ChatGPT?', a: 'Often, yes. AI answers lean on Reddit discussions, so honest mentions there can show up in what ChatGPT and AI Overviews say.' },
        ]} />
        <List items={['Account basics: [Reddit karma and account age](/reddit-karma-account-age).']} />
      </Section>
      <ContactCTA subject="New Inquiry: Reddit SEO" service="Reddit SEO" title="Send the brand and the topic where Reddit already shapes buyers." body="You will get a reply with the threads that matter and the first move." submitButtonText="Send my site" />
    </div>
  );
};
