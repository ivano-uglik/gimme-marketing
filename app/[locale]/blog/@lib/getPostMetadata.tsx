// uzima metadata u svakom file-u

import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}
export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = readdirSync(folder);
  const mdPosts = files.filter((f) => f.endsWith(".md"));
  const posts = mdPosts.map((fileName) => {
    const fileContents = readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      image: matterResult.data.image,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}
