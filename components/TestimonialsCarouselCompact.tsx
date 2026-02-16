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
    quote: 'Zechariah was one of the best people I had ever contracted out. He was able to help us yield nearly 7 figures in revenue.',
    linkedinVerified: true,
  },
  {
    name: 'Yonatan Vinnik, LSW',
    title: 'Therapist',
    company: '',
    quote: 'Within one week, our business was showing #1 on Google Maps for every target search term we cared about. He truly understands SEO and local search.',
    linkedinVerified: true,
  },
  {
    name: 'Brett Sheldon, LCSW',
    title: 'CEO',
    company: 'Launch Point Network',
    quote: 'Within a couple of months, I was ranking at the top for my key searches. I have saved a ridiculous amount of money—easily thousands of dollars!',
    linkedinVerified: true,
  },
  {
    name: 'Yehudah Kreitenberg',
    title: 'CBDO',
    company: 'PAYIP',
    quote: 'Extremely talented, sharp, and genuinely passionate. He is both creative and analytical—a rare combination.',
    linkedinVerified: true,
  },
  {
    name: 'Rivka Neumann',
    title: 'Founder',
    company: 'FLYHOST.ME',
    quote: "He doesn't just tick boxes - he cares. Deeply. SEO isn't about doing 'all the right things' - it's about bringing the right people to your site.",
    linkedinVerified: true,
  },
  {
    name: 'Menachem Encaoua',
    title: 'Entrepreneur',
    company: 'Turning Ideas Into Businesses',
    quote: 'He took the time to understand my business and explained strategy in a way that was practical and easy to follow. Very knowledgeable and honest.',
    linkedinVerified: true,
  },
];

interface TestimonialsCarouselCompactProps {
  autoPlayInterval?: number;
  className?: string;
}

export const TestimonialsCarouselCompact: React.FC<TestimonialsCarouselCompactProps> = ({
  autoPlayInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
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
      {/* Compact Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-2">
          <span className="material-symbols-outlined text-xs text-primary">verified</span>
          <span className="text-xs font-medium text-primary">Verified Reviews</span>
        </div>
      </div>

      {/* Compact Carousel Container */}
      <div
        className="relative max-w-5xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Testimonial Card - Compact Version */}
        <div className="relative min-h-[140px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 z-10'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-4 z-0 pointer-events-none'
                  : 'opacity-0 translate-x-4 z-0 pointer-events-none'
              }`}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 px-6 py-4 relative">
                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-grow">
                    {/* Quote */}
                    <p className="text-sm text-slate-700 leading-relaxed mb-2 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </span>
                      {testimonial.linkedinVerified && (
                        <span className="material-symbols-outlined text-[#0A66C2] text-base">
                          verified
                        </span>
                      )}
                      <span className="text-slate-500 text-xs">
                        {testimonial.title}
                        {testimonial.company && ` @ ${testimonial.company}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>

        {/* Compact Dots Navigation */}
        <div className="flex justify-center gap-1.5 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
