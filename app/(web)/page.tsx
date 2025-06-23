import CTA from '@/components/cta';
import Features from '@/components/features';
import Hero from '@/components/hero';
import SocialProof from '@/components/social-proof';
import Solutions from '@/components/solutions';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Solutions />
      <Features />
      <CTA />
    </>
  );
}
