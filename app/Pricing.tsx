import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });
import checkmark from "@/public/checkmark.svg";
export default function Pricing() {
  return (
    <div className="text-white">
      <div>
        <h2
          className={`${unbounded.className} text-bold text-4xl text-center font-bold`}
        >
          Pricing
        </h2>
        <div className="flex justify-center py-4">
          <p className="md:w-1/3 text-center text-lg">
            Learn In 60 seconds you can set up your digital presence for
            restaurant online. For FREE!
          </p>
        </div>
      </div>
      <div className="bg-white w-[90vw] md:w-[65vw] rounded-3xl my-16 mx-auto text-gimme p-8 md:p-12 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2
              className={`${unbounded.className} font-bold text-xl md:text-3xl md:pb-4`}
            >
              Few reasons why to choose Gimme
            </h2>
            <ul className="checkmark checkmark checkmark-style text-gray-500 flex flex-col gap-8">
              <li>0&euro; set up fee and no monthly fee. Seriously.</li>
              <li>
                {"It's free to start and it will be for a limited time only."}
              </li>
              <li>
                {
                  "There's no limit to what you can sell. Use it for any type of industry."
                }
              </li>
              <li>
                You always get access to all the features. No tiered
                subscriptions.
              </li>
              <li>
                Our Discord community is here to support you!{" "}
                <a href="https://discord.com" className="font-bold text-gimme">
                  Join Discord Server
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 h-full bg-indigo-600 rounded-3xl p-8 text-white">
            <h3 className={`${unbounded.className} font-bold text-2xl`}>
              Order Ahead Features
            </h3>
            <p
              className={`${unbounded.className} font-bold text-xs opacity-50 py-2`}
            >
              No Credit Card Required
            </p>
            <ul
              className={`${unbounded.className} font-bold py-4 flex flex-col gap-2`}
            >
              <li>Order ahead option</li>
              <li>Takeaway for restaurants and similar stores</li>
              <li>Dynamic QR Codes</li>
              <li>Loyalty Cards & Program</li>
              <li>Multiple stores</li>
              <li>Unlimited store categories, items</li>
              <li>Custom store design</li>
              <li>Free menu or store setup service</li>
              <li>You can request an Android native App</li>
              <li>More!</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className={`${unbounded.className} px-16 py-4 mt-8 rounded-full bg-gimme text-white font-bold`}
          >
            Get started for Free!
          </button>
        </div>
      </div>
    </div>
  );
}
