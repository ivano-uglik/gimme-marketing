import Link from "next/link";
import getPostMetadata from "./@lib/getPostMetadata";

export default function BlogPost() {
  const postMetadata = getPostMetadata();
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 py-8">
        {postMetadata.map((post) => (
          <Link href={`/blog/post/${post.slug}`} key={post.slug}>
            <div className="bg-gray-100 w-full lg:w-[35vw] xl:w-[20vw] p-8 font-bold rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out h-full">
              <div className="w-[90%] mx-auto">
                <img
                  src={`${post.image}`}
                  className="rounded-2xl drop-shadow-lg"
                  loading="lazy"
                  alt={post.title}
                />
                <h1 className="text-xl mt-8">{post.title}</h1>
                <h2 className="font-medium opacity-75 mt-2">
                  {post.description}
                </h2>
              </div>
              <div className="flex justify-between mt-8 text-[#3C1E85]">
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
