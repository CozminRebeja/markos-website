import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-16 md:px-36 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary font-tt-firs-neue mb-4">
              MarkOS
            </h3>
            <p className="text-text-secondary font-dm-sans max-w-xs">
              The AI-powered content review platform for high-performance
              marketing teams.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-primary mb-4 font-inter">
              Product
            </h4>
            <ul className="space-y-3 text-text-secondary font-dm-sans">
              <li>
                <Link href="#" className="hover:text-primary">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-primary mb-4 font-inter">
              Company
            </h4>
            <ul className="space-y-3 text-text-secondary font-dm-sans">
              <li>
                <Link href="#" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-primary mb-4 font-inter">
              Legal
            </h4>
            <ul className="space-y-3 text-text-secondary font-dm-sans">
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-accent font-dm-sans text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2025 MarkOS. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <div className="w-6 h-6 bg-accent rounded-full hover:bg-text-secondary"></div>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <div className="w-6 h-6 bg-accent rounded-full hover:bg-text-secondary"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
