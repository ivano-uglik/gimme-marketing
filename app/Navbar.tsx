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
    <div className="radial mx-auto">
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
    </div>
  );
}
