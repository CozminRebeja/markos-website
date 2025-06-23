'use client';

import React from 'react';
import Image from 'next/image';
import { useAppearAnimation } from '@/hooks/use-appear-animation';

const SocialProof: React.FC = () => {
  const containerRef = useAppearAnimation('.animate-appear');

  return (
    <section
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="pb-24 px-4 sm:px-16 md:px-36"
    >
      <div className="relative flex justify-center items-center h-[470px] animate-appear">
        <Image
          src="/post-image.png"
          alt="Social Media Post showing MarkOS in action"
          width={348}
          height={453}
          className="rounded-3xl shadow-2xl z-10 object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default SocialProof;
