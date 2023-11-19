// dynamic route za svaki post, sastoji se od title-a, slike iz metadata i content koji je markdown-to-jsx convert-ao, <Markdown>

import getPostContent from "../../@lib/getPostContent";
import getPostMetadata from "../../@lib/getPostMetadata";
import Markdown from "markdown-to-jsx";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
};
export default function Post({ params }: { params: { slug: string } }) {
  const postMetadata = getPostMetadata();
  const postContent = getPostContent(params.slug);
  return (
    <div className="text-justify p-2 text-white">
      {postMetadata.map(
        (post) =>
          post.slug == params.slug && (
            <h1
              key={post.slug}
              className="text-center text-xl md:text-3xl font-bold"
            >
              {post.title}
            </h1>
          )
      )}
      <article className="text-white prose-headings:text-white prose-strong:text-white prose-li:text-white prose-a:text-white content-container overflow-x-hidden prose lg:prose-xl mx-auto">
        <Markdown>{postContent}</Markdown>
      </article>
    </div>
  );
}
