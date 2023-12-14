import { GiPin } from "react-icons/gi";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import stickypost from "@/public/stickypost.webp";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Sticky() {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4 font-bold text-white bg-fixed items-center">
      <div className="basis-1/2 flex flex-col gap-2">
        <h1 className="text-3xl">
          Gimme Success Stories: Real Businesses, Real Results
        </h1>
        <h2 className="text-lg opacity-50">
          Read inspiring stories of businesses that have achieved remarkable
          success with Gimme. Discover how they saved time and money while
          increasing revenue.
        </h2>
        <div>
          <a href="/blog/post/random-post">
            <button
              className={`${unbounded.className} bg-white text-gimme font-bold rounded-full px-4 py-2 inline mt-2 hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
            >
              Read Article
            </button>
          </a>
        </div>
      </div>
      <a href="/blog/post/random-post">
        <Image
          src={stickypost}
          className="rounded-2xl w-[32rem] drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          alt="Gimme Success Stories: Real Businesses, Real Results"
          unoptimized
        />
      </a>
    </div>
  );
}
