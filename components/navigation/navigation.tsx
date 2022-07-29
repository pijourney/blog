import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";
import { PostList } from "../util";
import { Hamburger } from "./hamburger";
import { MenuItem } from "./menuitem";

const getAllNavs = (categories: PostList[], currentRoute: string[]) => {
  return (
    <>
      {categories.map(({ folder, posts }: PostList, y: number) => {
        return (
          <MenuItem
            name={folder}
            posts={posts}
            currentRoute={currentRoute}
            defaultOpen={currentRoute[2] === folder}
            key={y}
          />
        );
      })}
    </>
  );
};
export type NavProps = {
  categories: PostList[];
};
export const Navigation = ({ categories }: NavProps) => {
  const router = useRouter();
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const toggleState = () => {
    setOpen(!open);
  };

  useOnClickOutside(ref, () => setOpen(false));

  const currentRoute = router.pathname;
  return (
    <>
      <Hamburger
        className={`${!open ? "absolute" : "hidden"} top-8 right-5 lg:hidden`}
        onClick={toggleState}
      />
      <nav
        ref={ref}
        className={`lg:relative  lg:block lg:sticky lg:left-2  capitalize text-xl overflow-y-hidden top-4 overflow-x-hidden bg-primary rounded-xl p-5 absolute top-0 right-0 ${
          open ? "visible h-full z-10" : "hidden"
        }`}
      >
        {open && (
          <svg
            onClick={() => setOpen(false)}
            className="h-8 w-8 text-onSecoundary-600 ml-auto "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
        <ul className="relative list-none mr-1.5 pl-3.5 pr-3.5">
          {getAllNavs(categories, currentRoute.split("/"))}{" "}
        </ul>
      </nav>
    </>
  );
};
