import { BlogTable } from '@/components/blogs/Table';
import { allBlogs } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on various topics.',
};

export default function BlogPage(): JSX.Element {
  const blogs = allBlogs.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <main className="mb-10">
      <header className="mb-2 flex items-center text-muted-foreground">
        <span className="w-12 text-left">date</span>
        <span className="grow pl-2">title</span>
      </header>

      <BlogTable blogs={blogs} />
    </main>
  );
}
