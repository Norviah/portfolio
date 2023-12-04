import localFont from 'next/font/local';
import { env } from '@/utils/env';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: env.AUTHOR,
    template: `%s | ${env.AUTHOR}`,
  },
  openGraph: {
    title: env.AUTHOR,
    url: env.NEXT_PUBLIC_APP_URL,
    siteName: env.AUTHOR,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const font = localFont({
  src: [
    {
      path: '../../public/fonts/BrandonGrotesque-Black.otf',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-BlackItalic.otf',
      style: 'italic',
      weight: '900',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-BoldItalic.otf',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Light.otf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-LightItalic.otf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-MediumItalic.otf',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-RegularItalic.otf',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Thin.otf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-ThinItalic.otf',
      style: 'italic',
      weight: '100',
    },
  ],
});
