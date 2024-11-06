'use client';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './navigation/NavBar';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="container max-auto p-5">{children}</main>
      </body>
    </html>
  );
}
