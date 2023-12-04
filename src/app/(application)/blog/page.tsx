import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage(): JSX.Element {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">read my blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="mb-4 flex flex-col space-y-1" href={`/blog/${post.slug}`}>
            <div className="flex w-full flex-col">
              <p className="tracking-tight">{post.title}</p>
              <p className="text-muted-foreground">{post.description}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
