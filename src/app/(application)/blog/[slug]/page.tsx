import Link from 'next/link';

import { BlogHeader } from '@/components/mdx/BlogHeader';
import { Mdx } from '@/components/mdx/Mdx';
import { Separator } from '@/components/ui/Separator';
import { ChevronLeftIcon } from 'lucide-react';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { env } from '@/utils/env';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import '@/styles/mdx.css';

interface PageProps {
  params: {
    slug: string;
  };
}

function getBlogFromParams(slug: string) {
  const guide = allBlogs.find((guide) => guide.slugAsParams === slug);

  if (!guide) {
    null;
  }

  return guide;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
  const post = getBlogFromParams(params.slug);

  if (!post) {
    return {};
  }

  const { title, publishedAt: publishedTime, description } = post;
  const ogImage = `${env.NEXT_PUBLIC_APP_URL}/api/og?title=${encodeURI(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${env.NEXT_PUBLIC_APP_URL}/blog${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split('/')[0],
  }));
}

export default function BlogPage({ params }: PageProps): JSX.Element {
  const blog = getBlogFromParams(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <BlogHeader blog={blog} className="mb-10" />
      <Mdx code={blog.body.code} />
      <Separator className="mt-10" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }))}>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          See all blogs
        </Link>
      </div>
    </div>
  );
}
