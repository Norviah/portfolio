export type BlockquoteProps = JSX.IntrinsicElements['blockquote'];

export function Blockquote({ children, ...props }: BlockquoteProps): JSX.Element {
  return (
    <blockquote className='mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground' {...props}>
      {children}
    </blockquote>
  );
}
