import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { cn } from '@/utils/cn';

import type { LayoutProps } from '@/types/components/LayoutProps';
import type { Metadata } from 'next';

import * as config from '@/utils/config';

import '@/styles/globals.css';

export const metadata: Metadata = config.metadata;

export default function RootLayout(props: LayoutProps): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased', config.font.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
        <TailwindIndicator />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
