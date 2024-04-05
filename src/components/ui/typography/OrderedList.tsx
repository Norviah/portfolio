export type OrderedListProps = JSX.IntrinsicElements['ol'];

export function OrderedList(props: OrderedListProps): JSX.Element {
  return (
    <ol className='my-6 ml-6 list-decimal marker:text-muted-foreground [&>li]:mt-2' {...props}>
      {props.children}
    </ol>
  );
}
