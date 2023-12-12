import { cn } from '@/utils/cn';
import LinkBase from 'next/link';

import type { LinkProps } from 'next/link';
import type { ClassNameValue } from 'tailwind-merge';
import type { UrlObject } from 'url';

type Routes = Exclude<LinkProps<unknown>['href'], UrlObject>;
type Props = LinkProps<unknown>;

export function Link({ className, href, ...props }: Omit<Props, 'href'> & { href: Routes }): JSX.Element {
  const defaultClass: ClassNameValue = 'text-foreground-pop underline underline-offset-4';

  if (href.startsWith('/')) {
    return <LinkBase href={href as Routes} className={cn(defaultClass, className)} {...props} />;
  } else {
    return <a href={href} className={cn(defaultClass, className)} {...props} />;
  }
}
