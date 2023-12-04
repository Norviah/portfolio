import type { LinkProps } from 'next/link';
import type { UrlObject } from 'url';

export interface Route {
  name: string;
  path: Exclude<LinkProps<unknown>['href'], UrlObject>;
}
