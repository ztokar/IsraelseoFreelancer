import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  linkedinVerified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sean Littman',
    title: 'Founder',
    company: 'GIVESUITE.COM',
    quote: 'Where do I even begin. Zechariah was one of the best people I had ever contracted out. He was able to help us yield nearly 7 figures in revenue. His out of the box thinking and attention for detail really helped.',
    linkedinVerified: true,
  },
  {
    name: 'Yonatan Vinnik, LSW',
    title: 'Child & Family Therapist',
    company: '',
    quote: 'Within one week, our business was showing #1 on Google Maps for every target search term we cared about. I was honestly blown away by how fast and effective the results were. He truly understands SEO and local search.',
    linkedinVerified: true,
  },
  {
    name: 'Brett Sheldon, LCSW',
    title: 'CEO',
    company: 'Launch Point Network',
    quote: 'Within a couple of months, I was ranking at the top for my key searches, which honestly shocked me. I have saved a ridiculous amount of money—easily thousands of dollars! Talk to Zechariah.',
    linkedinVerified: true,
  },
  {
    name: 'Yehudah Kreitenberg',
    title: 'CBDO',
    company: 'PAYIP',
    quote: 'Extremely talented, sharp, and genuinely passionate. He is both creative and analytical, a rare combination, and quickly understands how to deliver real results.',
    linkedinVerified: true,
  },
  {
    name: 'Rivka Neumann',
    title: 'Founder',
    company: 'FLYHOST.ME',
    quote: "He doesn't just tick boxes - he cares. Deeply. SEO isn't about doing 'all the right things' - it's about bringing the right people to your site. That's exactly what he does.",
    linkedinVerified: true,
  },
  {
    name: 'Menachem Encaoua',
    title: 'Entrepreneur',
    company: 'Turning Ideas Into Businesses',
    quote: 'I really appreciated how clear and thoughtful he was. He took the time to understand my business and explained strategy in a way that was practical and easy to follow. Very knowledgeable and honest.',
    linkedinVerified: true,
  },
];

interface TestimonialsCarouselProps {
  autoPlayInterval?: number;
  className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  autoPlayInterval = 6000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isHovered, autoPlayInterval, goToNext]);

  return (
    <div className={`relative ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6">
          <span className="material-symbols-outlined text-sm text-primary">verified</span>
          <span className="text-sm font-medium text-primary">LinkedIn Verified Reviews</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          What Clients Say
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Real results from real partnerships. Every review verified on LinkedIn.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Testimonial Card */}
        <div className="relative min-h-[400px] sm:min-h-[350px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 scale-100 z-10'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-8 scale-95 z-0 pointer-events-none'
                  : 'opacity-0 translate-x-8 scale-95 z-0 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
                {/* Decorative Quote Mark */}
                <div className="absolute top-6 right-6 text-primary/10 text-8xl leading-none font-serif">
                  "
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-start gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900 text-lg">
                          {testimonial.name}
                        </h4>
                        {testimonial.linkedinVerified && (
                          <div className="group relative">
                            <span className="material-symbols-outlined text-[#0A66C2] text-xl">
                              verified
                            </span>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              LinkedIn Verified
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm">
                        {testimonial.title}
                        {testimonial.company && (
                          <>
                            {' '}
                            <span className="text-slate-400">@</span>{' '}
                            <span className="font-medium text-primary">
                              {testimonial.company}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition-all hover:scale-110 group"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">
            chevron_left
          </span>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition-all hover:scale-110 group"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">
            chevron_right
          </span>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar (optional) */}
        {!isHovered && (
          <div className="absolute -bottom-8 left-0 right-0 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary/30 animate-progress"
              style={{
                animation: `progress ${autoPlayInterval}ms linear`,
                animationIterationCount: 1,
              }}
            />
          </div>
        )}
      </div>

      {/* Add keyframe animation for progress bar */}
      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
