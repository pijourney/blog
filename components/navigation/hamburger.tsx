import { ComponentProps } from "../../@types";

export interface HamburgerProps extends ComponentProps {
  onClick: Function;
}
export const Hamburger = ({ className, onClick, ...rest }: HamburgerProps) => {
  return (
    <div
      className={` space-y-2 ${className}`}
      onClick={(_) => {
        onClick();
      }}
    >
      <span className="block h-0.5 w-8 animate-pulse bg-onSecondary"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-onSecondary"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-onSecondary"></span>
    </div>
  );
};
