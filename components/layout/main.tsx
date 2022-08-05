import { FC } from "react";
import { WithChildren } from "../../@types";
//Todo fix not md grid col table for index.
export interface MainProps extends WithChildren {
  tableOfContent?: boolean;
}
export const Main: FC<MainProps> = ({
  children,
  tableOfContent = true,
}: MainProps) => {
  const className = tableOfContent ? "md:grid-cols-tablet" : "";
  return (
    <div
      className={`w-full grid grid-cols-mobile ${className} lg:grid-cols-full gap-4 p-5 items-start`}
    >
      {children}
    </div>
  );
};
