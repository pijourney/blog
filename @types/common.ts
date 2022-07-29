import { ReplaceProps } from "./utils";

export interface ComponentProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** Additional style */
  style?: React.CSSProperties;
}
export interface WithChildren extends ComponentProps {
  /** Primary content */
  children?: React.ReactNode;
}

export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType
> extends ComponentProps {
  /** You can use a custom element for this component */
  as?: As;
}

export interface RsRefForwardingComponent<
  T extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = T>(
    props: React.PropsWithChildren<ReplaceProps<As, WithAsProps<As> & P>>,
    context?: any
  ): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  displayName?: string;
}
