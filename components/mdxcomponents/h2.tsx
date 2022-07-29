export function H2({ children }: any) {
  const id = children.replaceAll(" ", "-").toLowerCase();
  return <h2 id={id}>{children}</h2>;
}
