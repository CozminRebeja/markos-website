'use client';

import React from 'react';
import { useAppearAnimation } from '@/hooks/use-appear-animation';

const features = [
  {
    title: 'Reduce review time by 90%',
    description: 'Free up your team to focus on creating, not correcting.',
  },
  {
    title: 'Increase content output',
    description: 'Ship more content, faster, without sacrificing quality.',
  },
  {
    title: 'Mitigate brand risk',
    description: 'Catch non-compliant content before it ever gets published.',
  },
  {
    title: 'Drive better results',
    description:
      'Ensure your content is high-performing and on-brand, every time.',
  },
];

const Features: React.FC = () => {
  const containerRef = useAppearAnimation('.animate-appear');

  return (
    <section
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="py-24"
    >
      <div className="container mx-auto px-4 sm:px-16 md:px-36 text-center">
        <h2 className="text-4xl md:text-5xl font-medium font-tt-firs-neue text-text-primary mb-20 animate-appear">
          The best part? It actually works
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 animate-appear"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-2xl font-medium text-text-primary mb-2 font-inter">
                  {feature.title}
                </h3>
                <p className="text-text-secondary font-dm-sans">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
