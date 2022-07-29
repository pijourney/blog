import React, { ReactNode } from "react";
import { WithAsProps } from "../../@types";

export interface ContainerProp
  extends WithAsProps,
    React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
export const Container = ({ children, as, ...rest }: ContainerProp) => {
  const Component = as || "div";

  return <Component {...rest}>{children}</Component>;
};
