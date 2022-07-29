export type MetaData = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  imgUrl: string;
  imgAlt: string;
  date: string;
  updatedAt: string;
  tags: string[];
  headers: string[];
  slug: string;
};
export type PostDetails = {
  slug: string;
  meta: MetaData;
};

export type PostList = {
  folder: string;
  posts: PostDetails[];
};
export type CategoryList = {
  categories: PostList[];
};

export type ArticleSlugs = {
  params: {
    slug: string;
  };
};
