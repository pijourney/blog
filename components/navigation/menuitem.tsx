import { useState } from "react";
import { ChevronRight } from "../svgs";
import { PostDetails } from "../util";
import { SubMenu } from "./submenu";

export interface MenuProps {
  name: string;
  posts: PostDetails[];
  currentRoute: string[];
  defaultOpen: boolean;
}
export const MenuItem = ({
  name,
  posts,
  currentRoute,
  defaultOpen,
}: MenuProps) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <li onClick={(e) => setOpen(!open)}>
      <label className="hover:text-accent flex cursor-pointer mt-2.5 overflow-hidden snap-start text-ellipsis transition-colors justify-between justify-items-center">
        {name}
        {<ChevronRight className={open ? " rotate-90" : ""} />}
      </label>
      {posts && (
        <SubMenu
          name={name}
          posts={posts}
          open={open}
          currentSubRoute={currentRoute[3]}
        />
      )}
    </li>
  );
};
