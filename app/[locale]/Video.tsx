"use client";

import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });
import arrow from "@/public/svg-assets/arrow.svg";
import { useState } from "react";
export default function Video() {
  const [active, setActive] = useState(false);
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="md:w-1/2 text-center flex flex-col gap-4">
          <h2 className={`${unbounded.className} font-bold text-4xl`}>
            Watch Our 1 Minute Guide on How Gimme Works
          </h2>
          <p>
            Learn in 60 seconds how you can you set up your digital presence for
            your restaurant online. For FREE!
          </p>
        </div>
      </div>
      <div>
        <button
          className={`${unbounded.className} w-full h-[60vh] my-16 ${
            !active ? "video" : ""
          }`}
          onClick={(e) => setActive(true)}
        >
          <div className={`${!active ? "flex justify-center" : "hidden"}`}>
            <div
              className={`${unbounded.className} font-bold text-gimme bg-white rounded-full px-16 py-4 hover:text-white hover:bg-gimme hover:scale-125 transition-all duration-500 ease-in-out`}
            >
              Watch Video
            </div>
          </div>
          <div className={`${!active ? "hidden" : "block w-full h-full"}`}>
            <iframe
              src="https://player.vimeo.com/video/371095151?h=af2c00c42d"
              allow="autoplay; fullscreen; picture-in-picture"
              height="100%"
              width="100%"
            ></iframe>
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
