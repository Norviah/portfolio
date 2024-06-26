import { cn } from '@/utils/cn';
import Link from 'next/link';

import type { Route } from '@/types/Route';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: Route['path'];
  disabled?: boolean;
}

export function MdxCard({ href, className, children, disabled, ...props }: CardProps): JSX.Element {
  return (
    <div
      className={cn(
        'group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg',
        disabled && 'cursor-not-allowed opacity-60',
        className,
      )}
      {...props}
    >
      <div className='flex flex-col justify-between space-y-4'>
        <div className='space-y-2 text-foreground [&>h3]:!mt-0 [&>h4]:!mt-0'>{children}</div>
      </div>
      {href && (
        <Link href={disabled ? '#' : href} className='absolute inset-0'>
          <span className='sr-only'>View</span>
        </Link>
      )}
    </div>
  );
}
