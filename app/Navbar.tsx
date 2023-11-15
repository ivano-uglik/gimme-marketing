"use client";

// replace with navbar from joingimme.com

import Image from "next/image";
import GimmeLogo from "@/public/gimmeLogoWhite.svg";
import { Unbounded } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
const unbounded = Unbounded({ subsets: ["latin"] });
import { useState } from "react";
// gap 8 on all components
// hidden everything until lg
export default function Navbar() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  return (
    <div className="radial mx-auto relative">
      <div className="container mx-auto py-8 lg:py-4">
        <div className="text-white flex justify-between px-4 lg:px-0 items-center">
          <div className="lg:basis-1/3 justify-start">
            <Image
              src={GimmeLogo}
              alt="Gimme's Logo"
              className="w-28"
              unoptimized
            />
          </div>
          <ul className="hidden lg:flex gap-8 text-lg lg:basis-1/3 justify-center">
            <a href="">
              <li>Start</li>
            </a>
            <a href="#features">
              <li>Features</li>
            </a>
            <a href="#pricing">
              <li>Pricing</li>
            </a>
            <a href="#reviews">
              <li>Reviews</li>
            </a>
            <a href="#faq">
              <li>FAQ</li>
            </a>
            <li>Blog</li>
          </ul>
          <div className="flex gap-4 items-center lg:basis-1/3 justify-end">
            <span className="hidden lg:block">Log In</span>
            <button
              className={`${unbounded.className} text-gimme bg-white font-bold rounded-full px-4 py-3 lg:py-1 text-xs lg:text-base`}
            >
              Get Started
            </button>
            <div className="lg:hidden">
              <button
                className="p-4"
                onClick={(e) =>
                  activeDrawer ? setActiveDrawer(false) : setActiveDrawer(true)
                }
              >
                <GiHamburgerMenu size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={!activeDrawer ? "hidden" : "flex w-64 right-8 absolute"}>
        <ul className="flex flex-col w-full text-right bg-white rounded-2xl text-gimme z-50 border-indigo-800 border-2">
          <a href="/" className="p-4 border-b">
            <li> Start </li>
          </a>
          <a href="#features" className="p-4 border-b">
            <li> Features</li>
          </a>
          <a href="#pricing" className="p-4 border-b">
            <li> Pricing</li>
          </a>
          <a href="#reviews" className="p-4 border-b">
            <li> Reviews</li>
          </a>
          <a href="#faq" className="p-4 border-b">
            <li> FAQ</li>
          </a>
          <a href="https://gimme-blog.vercel.app" className="p-4">
            <li> Blog</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
