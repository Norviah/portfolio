export type UnorderedListProps = JSX.IntrinsicElements['ul'];

export function UnorderedList(props: UnorderedListProps): JSX.Element {
  return (
    <ul className="my-6 ml-6 list-disc marker:text-muted-foreground [&>li]:mt-2" {...props}>
      {props.children}
    </ul>
  );
}
