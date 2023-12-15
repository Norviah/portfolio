import { BlogDate } from '@/components/mdx/BlogDate';
import { Header } from '@/components/ui/typography/Header';

import { cn } from '@/utils/cn';

import type { Blog } from 'contentlayer/generated';

interface BlogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  blog: Blog;
}

export function BlogHeader({ blog, className, ...props }: BlogHeaderProps): JSX.Element {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <Header type="h2">{blog.title}</Header>
      <div className="flex justify-between">
        <p className="text-muted-foreground">{blog.description}</p>
        <BlogDate date={blog.publishedAt} />
      </div>
    </div>
  );
}
