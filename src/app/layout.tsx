import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { I18nProvider } from '@/contexts/I18nContext';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'One Bag Better - Track Your Environmental Impact',
  description: 'Join the cleanup movement! Track your trash collection efforts, see your environmental impact, and inspire others to make our planet cleaner, one bag at a time.',
  keywords: ['environmental', 'cleanup', 'trash collection', 'sustainability', 'community', 'planet', 'green'],
  authors: [{ name: 'One Bag Better' }],
  creator: 'One Bag Better',
  publisher: 'One Bag Better',
  metadataBase: new URL('https://onebagbetter.com'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onebagbetter.com',
    siteName: 'One Bag Better',
    title: 'One Bag Better - Track Your Environmental Impact',
    description: 'Join the cleanup movement! Track your trash collection efforts and inspire others to make our planet cleaner.',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'One Bag Better Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Bag Better - Track Your Environmental Impact',
    description: 'Join the cleanup movement! Track your trash collection efforts and inspire others to make our planet cleaner.',
    images: ['/icon-512.png'],
    creator: '@onebagbetter',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'One Bag Better',
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#84cc16',
    colorScheme: 'light',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
