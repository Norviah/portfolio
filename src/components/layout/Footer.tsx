import { cn } from '@/utils/cn';

import type * as React from 'react';

export function Footer({ className }: React.HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <footer className={cn('border-t', className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <p className='text-center text-sm leading-loose md:text-left'>
            Built by <span className='font-medium underline underline-offset-4'>shadcn</span>.
            Hosted on <span className='font-medium underline underline-offset-4'>Vercel</span>.
            Illustrations by <span className='font-medium underline underline-offset-4'>Popsy</span>
            . The source code is available on{' '}
            <span className='font-medium underline underline-offset-4'>GitHub</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
