'use client';

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-secondary p-3 text-center text-sm text-text-primary font-medium font-dm-sans">
        MarkOS raised $4.1M to speed up marketing teams!
      </div>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-16 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-primary font-tt-firs-neue"
          >
            MarkOS
          </Link>
          <div className="hidden md:flex items-center space-x-6 font-dm-sans">
            <Link
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition font-dm-sans">
            Get Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
