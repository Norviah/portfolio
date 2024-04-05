import type { UrlObject } from 'node:url';
import type { LinkProps } from 'next/link';

export interface Route {
  name: string;
  path: Exclude<LinkProps<unknown>['href'], UrlObject>;
}
