import { Unbounded } from "next/font/google";
import Image from "next/image";
const unbounded = Unbounded({ subsets: ["latin"] });
import {
  MdAdjust,
  MdCheckCircle,
  MdCreditCard,
  MdDesignServices,
  MdDirectionsCar,
  MdFastfood,
  MdOutlineMargin,
  MdOutlineQrCode,
  MdOutlineStore,
  MdPhonelinkSetup,
  MdRocketLaunch,
} from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import checkmark from "@/public/checkmark.svg";
export default function Pricing() {
  return (
    <div className="text-white">
      <div>
        <h2
          className={`${unbounded.className} text-bold text-4xl text-center font-bold`}
          id="pricing"
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
      <div className="bg-white rounded-3xl my-16 mx-auto text-gimme flex flex-col justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2
              className={`${unbounded.className} font-bold text-xl md:text-3xl md:pb-4`}
            >
              Few reasons why to choose Gimme
            </h2>
            <ul className="text-gray-500 flex flex-col gap-8 order-ahead">
              <div>
                <div>
                  <MdCheckCircle size={20} color={"green"} />
                </div>
                <li>0&euro; set up fee and no monthly fee. Seriously.</li>
              </div>
              <div>
                <div>
                  <MdCheckCircle size={20} color={"green"} />
                </div>
                <li>
                  {"It's free to start and it will be for a limited time only."}
                </li>
              </div>
              <div>
                <div>
                  <MdCheckCircle size={20} color={"green"} />
                </div>
                <li>
                  {
                    "There's no limit to what you can sell. Use it for any type of industry."
                  }
                </li>
              </div>
              <div>
                <div>
                  <MdCheckCircle size={20} color={"green"} />
                </div>
                <li>
                  You always get access to all the features. No tiered
                  subscriptions.
                </li>
              </div>
              <div>
                <div>
                  <FaDiscord size={20} color="#3c1e85" />
                </div>
                <li>
                  Our Discord community is here to support you!{" "}
                  <a
                    href="https://discord.com"
                    className="font-bold text-gimme"
                  >
                    Join Discord Server
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="md:w-1/2 h-full bg-indigo-600 rounded-3xl p-8 text-white mx-2 mt-2 md:mx-12 md:mt-12">
            <h3 className={`${unbounded.className} font-bold text-2xl`}>
              Order Ahead Features
            </h3>
            <p
              className={`${unbounded.className} font-bold text-xs opacity-50 py-2`}
            >
              No Credit Card Required
            </p>
            <ul
              className={`${unbounded.className} font-bold py-4 flex flex-col gap-4 order-ahead`}
            >
              <div>
                <div>
                  <MdFastfood size={20} />
                </div>
                <li>Order ahead option</li>
              </div>
              <div>
                <div>
                  <MdDirectionsCar size={20} />
                </div>
                <li>Takeaway for restaurants and similar stores</li>
              </div>
              <div>
                <div>
                  <MdOutlineQrCode size={20} />
                </div>
                <li>Dynamic QR Codes</li>
              </div>
              <div>
                <div>
                  <MdCreditCard size={20} />
                </div>
                <li>Loyalty Cards & Program</li>
              </div>
              <div>
                <div>
                  <MdOutlineMargin size={20} />
                </div>
                <li>Multiple stores</li>
              </div>
              <div>
                <div>
                  <MdOutlineStore size={20} />
                </div>
                <li>Unlimited store categories, items</li>
              </div>
              <div>
                <div>
                  <MdAdjust size={20} />
                </div>
                <li>Custom store design</li>
              </div>
              <div>
                <div>
                  <MdDesignServices size={20} />
                </div>
                <li>Free menu or store setup service</li>
              </div>
              <div>
                <div>
                  <MdPhonelinkSetup size={20} />
                </div>
                <li>Native Android App</li>
                <span className="text-xs bg-white rounded-full py-1 px-3 text-gimme">
                  NEW
                </span>
              </div>
              <div>
                <div>
                  <MdRocketLaunch size={20} />
                </div>
                <li>More!</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`${unbounded.className} px-16 py-4 my-8 rounded-full bg-gimme text-white font-bold hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            Get started for Free!
          </button>
        </div>
      </div>
    </div>
  );
}
