import { WithChildren } from "../../@types";

export const Main = ({ children }: WithChildren) => {
  return (
    <div className="w-full grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-full gap-4 p-5 items-start">
      {children}
    </div>
  );
};
