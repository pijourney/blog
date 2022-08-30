export type NavigationOrderType = {
  category: string;
  orderArticleList: string[];
};
const navigationOrder: NavigationOrderType[] = [
  {
    category: "nextjs",
    orderArticleList: [
      "nextjs-typescript",
      "article-layout",
      "tableofcontent",
      "codeblock-readtime",
      "sitemap-rss",
      "nextjs-blog",
    ],
  },
  {
    category: "k3s",
    orderArticleList: [
      "a-starting-point",
      "installing-os-configurations",
      "deploying-a-service",
    ],
  },
  {
    category: "equipment",
    orderArticleList: ["raspberry-pies"],
  },
];

export const findTopNavigation = (category: string) => {
  const foundIndex = navigationOrder.findIndex(function (obj) {
    return obj.category === category;
  });
  // If not found, this will be -1.  But that would sort all
  // unfound objects at the beginning of the array.
  // To place these objects at the end of the array, it needs to
  // return a number higher than the rest.  So return infinity.
  return foundIndex === -1 ? Infinity : foundIndex;
};

export const findSubNavigation = (category: string, articleName: string) => {
  const foundIndex = navigationOrder.findIndex((obj) => {
    return obj.category === category;
  });
  if (foundIndex != -1) {
    const subIndex = navigationOrder[foundIndex].orderArticleList.findIndex(
      (article) => {
        return article === articleName.replace(".mdx", "");
      }
    );
    return subIndex === -1 ? Infinity : subIndex;
  }
  return Infinity;
};
