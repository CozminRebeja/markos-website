import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './styles/globals.css'; // <-- CORRECTED PATH for styles inside app/

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const tt_firs_neue = localFont({
  src: './fonts/TTFirsNeue-Medium.woff2',
  display: 'swap',
  variable: '--font-tt-firs-neue',
});

export const metadata: Metadata = {
  title: 'MarkOS - AI-Powered Content Reviews',
  description:
    'Drive performance, stay compliant, and protect your brand with AI-powered content reviews.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dm_sans.variable} ${tt_firs_neue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
