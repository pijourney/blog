import Image from "next/image";

import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ComponentProps } from "../../@types";
import { PostDetails, PostList } from "../util";

export interface PostsProps extends ComponentProps {
  categories: PostList[];
}
interface FlattenPostList extends PostDetails {
  folder: string;
}
const flattenPostList = (categories: PostList[]) => {
  const flattenPostList: FlattenPostList[] = [];
  categories.forEach((postlist, i) => {
    postlist.posts.forEach((post) => {
      flattenPostList.push({
        folder: postlist.folder,
        slug: post.slug,
        meta: post.meta,
      });
    });
  });
  return flattenPostList;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Posts = ({ categories }: PostsProps) => {
  const [postList, setPostList] = useState<FlattenPostList[]>();

  useEffect(() => {
    const flattendPostList = flattenPostList(categories);
    setPostList(flattendPostList);
  }, [categories]);
  //TODO sSSR and getInitProps for layout page and index to serverside render this.
  return (
    <>
      {postList && (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="justify-center"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          renderDotsOutside={true}
          sliderClass="gap-2"
          arrows={true}
        >
          {postList.map((post, i) => {
            return <Post folder={post.folder} post={post} key={i} />;
          })}
        </Carousel>
      )}
    </>
  );
};

type PostProps = {
  folder: string;
  post: PostDetails;
};
const Post = ({ folder, post }: PostProps) => {
  //TODO link to post.
  return (
    <div className={`bg-primary flex flex-col	justify-between items-center `}>
      <span className="text-xs ">
        {post.meta.tags.slice(0, 3).map((tag) => {
          return tag + " ";
        })}
      </span>
      <span> {post.meta.date}</span>

      <Image
        src={post.meta.imgUrl}
        alt={post.meta.imgAlt}
        layout="fixed"
        width={"220px"}
        height={"140px"}
      />
      <h3>{post.meta.title}</h3>
    </div>
  );
};
