import Link from 'next/link';
import { cn } from '@/utils/cn';

import type { Blog } from 'contentlayer/generated';

function getYear(date: string) {
  return new Date(date).getFullYear();
}

export function BlogTable({ blogs }: { blogs: Blog[] }): JSX.Element {
  return (
    <ul>
      {blogs.map((blog, i: number) => {
        const year = getYear(blog.publishedAt);

        const firstOfYear = !blogs[i - 1] || getYear(blogs[i - 1].publishedAt) !== year;
        const lastOfYear = !blogs[i + 1] || getYear(blogs[i + 1].publishedAt) !== year;

        return (
          <li key={i}>
            <Link href={`/blog/${blog.slug}`}>
              <span
                className={cn(
                  'flex border-y border-border transition-colors hover:bg-muted/70 hover:text-foreground-pop active:bg-muted',
                  !firstOfYear && 'border-t-0',
                  lastOfYear && 'border-b-0'
                )}
              >
                <span className={`flex grow items-center py-3 ${!firstOfYear ? 'ml-14' : ''}`}>
                  {firstOfYear && <span className="inline-block w-14 shrink-0 self-start text-foreground">{year}</span>}

                  <span className="flex flex-col">
                    <span className="grow">{blog.title}</span>
                    <span className="grow text-sm text-muted-foreground">{blog.description}</span>
                  </span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
