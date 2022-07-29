import type { NextPage } from "next";
import Link from "next/link";
import { Main } from "../components/layout";
import { Navigation } from "../components/navigation";
import { Posts } from "../components/postlist";
import { CategoryList, getCategoriesWithMetaData } from "../components/util";
import {
  generateRssFeed,
  generateSiteMap,
} from "../components/util/generators";

export async function getStaticProps() {
  const categories = await getCategoriesWithMetaData("./pages/articles/");
  generateSiteMap(categories);
  generateRssFeed(categories);
  return {
    props: {
      categories,
    },
  };
}

const Home: NextPage<CategoryList> = ({ categories }) => {
  return (
    <>
      <Main tableOfContent={false}>
        <Navigation categories={categories} />
        <article className="bg-primary  rounded-xl p-5 prose  prose-custom prose-lg max-w-none">
          <h1>Welcome to Pijourney</h1>
          <p>
            This is my personal blog about everything pi related.
            <br />
            More specifically most things related to a bare metal pi for
            example:
          </p>
          <ul>
            <li>What hardware the cluster is running on.</li>
            <li>How to set it all up!</li>
            <li>Configuring the cluster.</li>
            <li>Writing and publishing your first application.</li>
            <li>And much much more.</li>
          </ul>
          <p>
            Find your way in the navigation to the left or checkout
            <Link href="/articles/equipment/raspberry-pies">
              <a className="no-underline text-secondary hover:text-scoundaryTint">
                {" "}
                this{" "}
              </a>
            </Link>
            article to get started. <br />
            Or checkout the carousel below to find an article that suits you!
          </p>
        </article>
        <div className=" rounded-xl p-5 hidden md:block"> </div>
      </Main>
      <Posts categories={categories}></Posts>
    </>
  );
};

export default Home;
