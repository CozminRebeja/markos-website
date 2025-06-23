'use client';

import React from 'react';
import { useAppearAnimation } from '@/hooks/use-appear-animation';

const CTA: React.FC = () => {
  const containerRef = useAppearAnimation('.animate-appear');

  return (
    <section
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-16 md:px-36 text-center">
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-medium font-tt-firs-neue mb-4 animate-appear">
            Ready to ship more content, faster?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-appear font-dm-sans">
            See how MarkOS can help your team drive performance.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-dm-sans font-medium text-lg hover:bg-gray-200 transition animate-appear">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
