import fs from "fs";
import {
  findSubNavigation,
  findTopNavigation,
} from "../navigation/navigationorder";
import { MetaData, PostDetails } from "./types";

export const getCategoriesWithMetaData = async (directory: string) => {
  const folders = fs.readdirSync(directory);
  folders.sort((a, b) => findTopNavigation(a) - findTopNavigation(b));
  const cats = await Promise.all(
    folders.map(async (folder) => {
      var folderName = directory + folder;
      const files = fs.readdirSync(folderName);
      files.sort(
        (a, b) => findSubNavigation(folder, a) - findSubNavigation(folder, b)
      );
      const posts: PostDetails[] = await Promise.all(
        files.map(async (fileName) => {
          const slug = fileName.replace(".mdx", "");
          const meta = (await require(`/pages/articles/${folder}/${fileName}`))
            .meta as MetaData;
          return {
            slug,
            meta,
          } as PostDetails;
        })
      );

      return { folder, posts };
    })
  );
  return cats;
};
