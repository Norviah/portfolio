import Image from 'next/image';
import React from 'react';

import { Callout } from '@/components/mdx/Callout';
import { MdxCard } from '@/components/mdx/Card';
import { CodeBlock } from '@/components/ui/typography/CodeBlock';
import { Header } from '@/components/ui/typography/Header';

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

  a: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a className={cn('font-bold text-foreground-pop underline underline-offset-4', className)} {...props} />
  ),

  p: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),

  ul: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc marker:text-muted-foreground', className)} {...props} />
  ),

  ol: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal marker:text-muted-foreground', className)} {...props} />
  ),

  li: ({ className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),

  blockquote: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)} {...props} />
  ),

  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),

  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,

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
    <pre className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-red-50 p-5', className)} {...props} />
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
