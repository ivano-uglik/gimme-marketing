// uzima content koji se nalazi u svakom .md file-u, i matterResult sakrije metadata iz prikaza

import { readFileSync } from "fs";
import matter from "gray-matter";

export default function getPostContent(slug: string): string {
  const folder = "/posts";
  const file = `posts/${slug}.md`;
  const content = readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult.content;
}
