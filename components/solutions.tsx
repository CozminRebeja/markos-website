'use client';

import React from 'react';
import { useAppearAnimation } from '@/hooks/use-appear-animation';

const solutions = [
  {
    title: 'For Compliance',
    description:
      'Ensure every piece of content is legally sound and follows industry regulations.',
  },
  {
    title: 'For Brand',
    description:
      'Maintain a consistent and strong brand voice across all your marketing channels.',
  },
  {
    title: 'For Performance',
    description:
      'Optimize content to drive engagement, conversions, and business growth.',
  },
];

const Solutions: React.FC = () => {
  const containerRef = useAppearAnimation('.animate-appear');

  return (
    <section
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-16 md:px-36 text-center">
        <p className="text-accent font-medium mb-8 animate-appear font-dm-sans">
          Loved by leading client-facing teams
        </p>
        <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-24 animate-appear grayscale opacity-60">
          {/* Replace with your actual logos */}
          <span className="text-2xl font-bold">Client</span>
          <span className="text-2xl font-bold">Partner</span>
          <span className="text-2xl font-bold">Trust</span>
          <span className="text-2xl font-bold">Venture</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-medium font-tt-firs-neue text-text-primary mb-20 animate-appear">
          Your go-to solution for tackling <br /> content challenges
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-2xl animate-appear"
            >
              <div className="w-12 h-12 bg-primary rounded-lg mb-6"></div>
              <h3 className="text-2xl font-medium font-tt-firs-neue text-text-primary mb-3">
                {sol.title}
              </h3>
              <p className="text-text-secondary font-dm-sans">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
