import Link from "next/link";
import { PostDetails } from "../util";
import { MenuProps } from "./menuitem";

interface SubMenuProps
  extends Omit<Omit<MenuProps, "currentRoute">, "defaultOpen"> {
  open: boolean;
  currentSubRoute: string;
}
export const SubMenu = ({
  name,
  posts,
  open,
  currentSubRoute,
}: SubMenuProps) => {
  return (
    <nav className={!open ? "invisible max-h-0" : "pl-4"}>
      <ul>
        {posts.map((post: PostDetails, i: number) => {
          const current = currentSubRoute === post.meta.slug;
          return (
            <Link href={"/articles/" + name + "/" + post.slug} key={i}>
              <li key={name + "-" + post.slug}>
                <label
                  className={current ? " text-accent" : "hover:text-accent"}
                >
                  {post.meta.metaTitle}
                </label>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
