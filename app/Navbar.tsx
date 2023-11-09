// replace with navbar from joingimme.com

import Image from "next/image";
import GimmeLogo from "@/public/gimmeLogo.svg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className={`${inter.className}`}>
      <div className="text-white flex justify-around items-center py-2 radial ">
        <div>
          <Image src={GimmeLogo} alt="" unoptimized />
        </div>
        <div>
          <ul className="flex gap-6">
            <div className="relative">
              <li>Start</li>
              <div className="bg-white rounded-full absolute top-10">test</div>
            </div>
            <li>Features</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <span>Log In</span>
          <button className="text-gimme bg-white rounded-full px-4 py-2 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

// export default function Navbar() {
//   return (
//     // <div className="navigation">
//     <div className={`${inter.className} navigation0`}>
//       <div className="flex justify-around p-8 text-white drop-shadow ">
//         <a href="/">
//           <Image
//             src={GimmeLogo}
//             alt="Gimme - Order food and drinks via app"
//             className="bg-white"
//             unoptimized
//           />
//         </a>
//         <div className="hidden md:flex items-center gap-8">
//           <ul className="flex gap-8 items-center">
//             <li>
//               <a href="/">Overview</a>
//             </li>
//             <li className="opacity-50">
//               <a href="#">Use Cases</a>
//             </li>
//             <li className="opacity-50">
//               <a href="#">How it Works</a>
//             </li>
//             <li className="opacity-50">
//               <a href="#">About us</a>
//             </li>
//             <li className="opacity-50">
//               <a href="https://gimme-blog.vercel.app/">Blog</a>
//             </li>
//             <li className="opacity-50">
//               <a href="#">Pricing</a>
//             </li>
//           </ul>
//           <button className="primary-button">Get started</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // replace with navbar from joingimme.com
// import GimmeLogo from "@/public/gimmeLogo.svg";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <div className="navigation">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="flex items-center justify-center p-4">
//             <span>
//               <a aria-current="page" href="/">
//                 <Image
//                   src={GimmeLogo}
//                   alt="Gimme - Order food and drinks via app"
//                   unoptimized
//                 />
//               </a>
//             </span>
//             <div className="float-right">
//               <ul className="flex gap-8 items-center text-lg">
//                 <li>
//                   <a href="/">Overview</a>
//                 </li>
//                 <li className="opacity-50">
//                   <a href="#">Use Cases</a>
//                 </li>
//                 <li className="opacity-50">
//                   <a href="#">How it Works</a>
//                 </li>
//                 <li className="opacity-50">
//                   <a href="#">About us</a>
//                 </li>
//                 <li className="opacity-50">
//                   <a href="https://gimme-blog.vercel.app/">Blog</a>
//                 </li>
//                 <li className="opacity-50">
//                   <a href="#">Pricing</a>
//                 </li>
//               </ul>
//               <span className="primary-button">Get started</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
