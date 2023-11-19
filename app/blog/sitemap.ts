import { MetadataRoute } from "next";
import getPostMetadata from "./@lib/getPostMetadata";

function getPostSlugs() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function sitemap(): any {
  const postSlugs = getPostSlugs();
  const sitemapEntries = postSlugs.map((post) => ({
    url: `https://gimme-blog.vercel.app/post/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Add the homepage to the sitemap as well
  sitemapEntries.unshift({
    url: "https://gimme-blog.vercel.app",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  });

  return sitemapEntries;
}
