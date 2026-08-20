import React, { useEffect, useRef, useState } from 'react';

// LinkedIn profile badge. Loaded lazily, only once it scrolls near the viewport,
// so the third-party script never competes with the page content for the first
// bytes Google reads. The inner <a> is the fallback: if the script is blocked
// (privacy extensions, corporate networks), the visitor still gets a real link.
const BADGE_SRC = 'https://platform.linkedin.com/badges/js/profile.js';
const PROFILE_URL = 'https://il.linkedin.com/in/zechariah-tokar-167b7672?trk=profile-badge';

let scriptRequested = false;

const requestScript = () => {
  if (scriptRequested || typeof document === 'undefined') return;
  scriptRequested = true;
  const s = document.createElement('script');
  s.src = BADGE_SRC;
  s.async = true;
  s.defer = true;
  s.type = 'text/javascript';
  document.body.appendChild(s);
};

export const LinkedInBadge: React.FC<{ theme?: 'light' | 'dark'; size?: 'medium' | 'large' }> = ({
  theme = 'light',
  size = 'medium',
}) => {
  const holder = useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setArmed(true);
      requestScript();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setArmed(true);
          requestScript();
          io.disconnect();
        }
      },
      { rootMargin: '300px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div className="li-badge-holder" ref={holder}>
      {armed && (
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size={size}
          data-theme={theme}
          data-type="VERTICAL"
          data-vanity="zechariah-tokar-167b7672"
          data-version="v1"
        >
          <a className="badge-base__link LI-simple-link" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
            Zechariah Tokar
          </a>
        </div>
      )}
    </div>
  );
};
