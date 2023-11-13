import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });
import video from "@/public/video.png";
import arrow from "@/public/svg-assets/arrow.svg";
export default function Video() {
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="px-2 md:px-0 md:w-1/3 text-center flex flex-col gap-4">
          <h2 className={`${unbounded.className} font-bold text-3xl`}>
            Watch Our 1 Minute Guide on How Gimme Works
          </h2>
          <p>
            Learn in 60 seconds how you can you set up your digital presence for
            your restaurant online. For FREE!
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src={video}
          alt=""
          className="my-32 mx-auto border-b-8 rounded-b-2xl"
          unoptimized
        />
        <button
          className={`${unbounded.className} absolute left-0 right-0 top-0 bottom-0 m-auto`}
        >
          <div className="flex justify-center">
            <div
              className={`${unbounded.className} font-bold text-gimme bg-white w-2/3 md:w-1/4 rounded-full px-4 py-2`}
            >
              Watch Video
            </div>
          </div>
        </button>
      </div>
      <div className="relative py-16">
        <div className="absolute left-1/4 right-1/2 top-0 bottom-0">
          <Image src={arrow} alt="" unoptimized />
        </div>
      </div>
    </div>
  );
}
