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
      <span className="h-0.5 w-6 block sm:h-0.5 sm:w-8 animate-pulse bg-onSecondary"></span>
      <span className="h-0.5 w-6 block sm:h-0.5 sm:w-8 animate-pulse bg-onSecondary"></span>
      <span className="h-0.5 w-6 block sm:h-0.5 sm:w-8 animate-pulse bg-onSecondary"></span>
    </div>
  );
};
