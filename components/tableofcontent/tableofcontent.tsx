import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useIntersection } from "../../hooks";
import { MetaData } from "../util";
type tableOfContentProps = {
  meta: MetaData;
  articleHasScroll: boolean;
};
const getClassNames = (
  inViewPort: number,
  activeAnchor: number,
  linkNumber: number
) => {
  let classNames = "hover:text-accent text-xl";
  //Above.
  if (inViewPort === 0 || activeAnchor > linkNumber) {
    classNames = classNames + " text-primaryTint";
  }
  if (inViewPort === 1 || activeAnchor === linkNumber) {
    classNames = "text-accent text-xl";
  }
  return classNames;
};

const AnchorLink: FC<{
  header: string;
  activeAnchor: number;
  setActiveAnchor: Function;
  linkNumber: number;
}> = ({ header, activeAnchor, setActiveAnchor, linkNumber }) => {
  let inViewport = -1;
  let headerElement = null;
  if (typeof window !== "undefined")
    headerElement = document.getElementById(
      header.replaceAll(" ", "-").toLowerCase()
    );
  inViewport = useIntersection(headerElement);
  useEffect(() => {
    if (inViewport === 1) {
      setActiveAnchor(linkNumber);
    }
  }, [inViewport, linkNumber, setActiveAnchor]);
  const link = header.replaceAll(" ", "-").toLowerCase();
  return (
    <Link href={"#" + link}>
      <a className={getClassNames(inViewport, activeAnchor, linkNumber)}>
        {header}
      </a>
    </Link>
  );
};
export const TableOfContent = ({
  meta,
  articleHasScroll,
}: tableOfContentProps) => {
  const [activeAnchor, setActiveAnchor] = useState<number>(0);
  const getEveryLink = (
    headers: string[],
    activeAnchor: number,
    setActiveAnchor: Function
  ) => {
    return (
      headers &&
      headers.map((header, i) => {
        return (
          <AnchorLink
            key={i}
            header={header}
            activeAnchor={articleHasScroll ? activeAnchor : -1}
            setActiveAnchor={setActiveAnchor}
            linkNumber={i}
          />
        );
      })
    );
  };

  return (
    <div className="bg-primary rounded-xl p-5 hidden md:flex flex-wrap basis-full flex-col gap-y-2 sticky top-4">
      <h3 className="text-2xl mb-3">Table of content</h3>
      {getEveryLink(meta.headers, activeAnchor, setActiveAnchor)}
    </div>
  );
};
