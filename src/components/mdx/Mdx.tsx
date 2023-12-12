import Image from 'next/image';
import React from 'react';

import { DynamicLink } from '@/components/DynamicLink';
import { Callout } from '@/components/mdx/Callout';
import { MdxCard } from '@/components/mdx/Card';
import { Separator } from '@/components/ui/Separator';
import { CodeBlock } from '@/components/ui/typography/CodeBlock';
import { Header } from '@/components/ui/typography/Header';
import { OrderedList } from '@/components/ui/typography/OrderedList';
import { UnorderedList } from '@/components/ui/typography/UnorderedList';
import { Blockquote } from '../ui/typography/Blockquote';

import { cn } from '@/utils/cn';
import { useMDXComponent } from 'next-contentlayer/hooks';

import type { MDXComponents } from 'mdx/types';
import type { ClassNameValue } from 'tailwind-merge';

const components: MDXComponents = {
  h1: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h1" className={cn('mt-2 scroll-m-20 border-b', className)} {...props} />
  ),

  h2: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h2" className={cn('mt-10 scroll-m-20 pb-1 first:mt-0', className)} {...props} />
  ),

  h3: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h3" className={cn('mt-8 scroll-m-20', className)} {...props} />
  ),

  h4: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h4" className={cn('mt-8 scroll-m-20', className)} {...props} />
  ),

  h5: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h5" className={cn('mt-8 scroll-m-20', className)} {...props} />
  ),

  h6: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type="h6" className={cn('mt-8 scroll-m-20', className)} {...props} />
  ),

  a: ({ href, ...props }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <DynamicLink href={href!} {...props} />
  ),

  p: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),

  ul: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <UnorderedList {...props} />
  ),

  ol: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <OrderedList {...props} />
  ),

  blockquote: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <Blockquote {...props} />
  ),

  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),

  hr: () => <Separator className="my-4 md:my-8" />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),

  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),

  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  ),

  pre: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre className={cn('mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-5 [&>code]:bg-transparent', className)} {...props} />
  ),

  code: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <CodeBlock {...props} />
  ),

  strong: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className={cn('text-foreground-pop', className)} {...props} />
  ),

  codeblock: ({ className, ...props }: { className: ClassNameValue }) => (
    <pre className={cn('mt mb-4 overflow-x-auto rounded-lg border bg-black py-4', className)} {...props} />
  ),

  Image,
  Callout,
  Card: MdxCard,
};

export function Mdx({ code }: { code: string }): JSX.Element {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
