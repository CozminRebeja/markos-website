'use client';

import React from 'react';
import { useAppearAnimation } from '@/hooks/use-appear-animation';

const Hero: React.FC = () => {
  const containerRef = useAppearAnimation('.animate-appear');

  return (
    <section
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 sm:px-16 md:px-36 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-secondary rounded-full px-4 py-1.5 mb-6 animate-appear">
          <svg
            className="w-4 h-4 mr-2 text-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v4M3 5h4M19 3v4M17 5h4M12 2a2 2 0 100 4 2 2 0 000-4zM7.5 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM16.5 10.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM12 20a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          <span className="text-sm font-medium uppercase text-text-primary tracking-wider font-dm-sans">
            AI-powered content reviews
          </span>
        </div>
        <h1
          className="text-5xl md:text-6xl font-medium font-tt-firs-neue text-text-primary mb-6 animate-appear"
          style={{ lineHeight: '1.1' }}
        >
          Ensure your content <br /> hits the mark every time.
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-appear font-dm-sans">
          Drive performance, stay compliant, and protect your brand.
        </p>
        <button className="bg-primary text-white px-8 py-4 rounded-xl font-dm-sans font-medium text-lg hover:bg-opacity-90 transition animate-appear">
          Schedule Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
