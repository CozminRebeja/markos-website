import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
