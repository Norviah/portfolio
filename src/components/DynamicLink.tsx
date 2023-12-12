import { cn } from '@/utils/cn';
import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { ClassNameValue } from 'tailwind-merge';
import type { UrlObject } from 'url';

type Routes = Exclude<LinkProps<unknown>['href'], UrlObject>;

export function DynamicLink({
  className,
  href,
  ...props
}: Omit<LinkProps<unknown>, 'href'> & { href: Routes | string; className?: ClassNameValue }): JSX.Element {
  const defaultClass: ClassNameValue = 'text-foreground-pop underline underline-offset-4';

  if (href.startsWith('/')) {
    return <Link href={href as Routes} className={cn(defaultClass, className)} {...props} />;
  } else {
    return <a href={href} className={cn(defaultClass, className)} {...props} />;
  }
}
