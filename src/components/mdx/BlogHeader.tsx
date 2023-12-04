import { Header } from '@/components/ui/typography/Header';
import { Separator } from '../ui/Separator';

import { cn } from '@/utils/cn';

import type { Blog } from 'contentlayer/generated';

interface BlogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  blog: Blog;
}

function formatDate(date: string): string {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(date);

  const yearsAgo: number = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo: number = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo: number = currentDate.getDate() - targetDate.getDate();

  let formattedDate: string = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate: string = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export function BlogHeader({ blog, className, ...props }: BlogHeaderProps): JSX.Element {
  return (
    <>
      <div className={cn('space-y-4', className)} {...props}>
        <Header type="h2">{blog.title}</Header>
        <div className="flex justify-between">
          <p className="text-muted-foreground">{blog.description}</p>
          <p className="text-muted-foreground">{formatDate(blog.publishedAt)}</p>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  );
}
