import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { H2, Pre, ReadTime } from "../mdxcomponents";
import { Navigation } from "../navigation";
import { Posts } from "../postlist";
import { TableOfContent } from "../tableofcontent";
import { MetaData, PostList } from "../util";
import { Main } from "./main";

export type ArticleLayoutProps = {
  children: ReactNode;
  categories: PostList[];
  meta: MetaData;
};
const components = {
  pre: Pre,
  h2: H2,
};

export const ArticleLayout = ({
  children,
  categories,
  meta,
}: ArticleLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [articleHasScroll, setArticleHasScroll] = useState<boolean>(false);

  const elementBiggerThanViewport = (rect: DOMRect) => {
    return (
      rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  useEffect(() => {
    if (ref && ref.current) {
      const text = ref.current.innerText;
      text && setText(text);
      const rect = ref.current.getBoundingClientRect();
      const showTableOfContentHighlight = elementBiggerThanViewport(rect);
      if (showTableOfContentHighlight)
        setArticleHasScroll(showTableOfContentHighlight);
    }
  }, []);
  return (
    <>
      <Main>
        <ArticleHead meta={meta} />
        <Navigation categories={categories} />
        <MDXProvider components={components}>
          <article
            ref={ref}
            id="article"
            className=" bg-primary  rounded-xl p-5 prose  prose-custom prose-lg max-w-none relative"
          >
            <>
              {
                //TODO MAKE A header seaction with last update / read time creation date.
              }
              {ref.current && <ReadTime text={text} />}
              {children}
            </>
          </article>
        </MDXProvider>
        <TableOfContent meta={meta} articleHasScroll={articleHasScroll} />
      </Main>
      <Posts categories={categories}></Posts>
    </>
  );
};

export const ArticleHead: FC<{ meta: MetaData }> = ({ meta }) => {
  return (
    <Head>
      <title>{meta.metaTitle}</title>
      <meta name="description" content={meta.metaDesc} />
      <meta name="keywords" content={meta.tags.toString()} />
    </Head>
  );
};
