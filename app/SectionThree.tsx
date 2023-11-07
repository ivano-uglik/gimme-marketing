import Image from "next/image";

import industryOther from "@/public/industry-other.webp";
import industryRetail from "@/public/industry-retail.webp";

export default function SectionThree() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">
          Solutions for Businesses of All Sizes: {"We've Got You Covered"}
        </h2>
        <h3 className="text-xl opacity-75">
          Our goal is to simplify the daily life of restaurant owners and
          increase profits.
        </h3>
      </div>
      <div className="p-2 md:p-20 grid text-white grid-cols-1 md:grid-cols-3 gap-3 md:grid-rows-4 xl:mx-48">
        <div className="bg-indigo-800 rounded-3xl p-5 md:col-span-2 grid place-items-center">
          <div>
            <h2 className="text-3xl font-bold text-center">
              Order and Pay Directly in restaurant
            </h2>
            <h3 className="text-xl text-center pt-4">
              Maximize ordering potential and make it easy for your customers to
              get exactly what they want.
            </h3>
          </div>
        </div>
        <div className=" bg-indigo-800 rounded-3xl p-5 md:row-span-2 grid place-items-center">
          <div>
            <h2 className="text-3xl font-bold text-center">Takeaway</h2>
            <h3 className="text-xl text-center pt-4">
              {
                "Customize your restaurant's ordering page to your preferences, allow customers to pre-order for their preferred pickup time and make  payments"
              }
            </h3>
          </div>
          <Image
            src={industryOther}
            alt="Bag of money"
            className="w-32 mx-auto"
            unoptimized
          />
        </div>
        <div className=" bg-indigo-800 rounded-3xl p-5 md:row-span-2 grid place-items-center">
          <div>
            <h2 className="text-3xl font-bold text-center">Delivery</h2>
            <h3 className="text-xl text-center pt-4">
              By integrating with your website, you can serve your customers
              through your own delivery platform, saving on third-party fees and
              retaining control over your quality
            </h3>
          </div>
          <Image
            src={industryRetail}
            alt="Shopping Cart"
            className="w-32 mx-auto"
            unoptimized
          ></Image>
        </div>
        <div className="bg-indigo-800 rounded-3xl p-5 grid place-items-center">
          <div>
            <h2 className="text-3xl font-bold text-center">Digital menus</h2>
            <h3 className="text-xl text-center pt-4">
              Make it easy for your guests to quickly scan the QR code and
              instantly view our diverse menu for additional ordering
              inspiration
            </h3>
          </div>
        </div>
        <div className="bg-indigo-800 rounded-3xl p-5 grid place-items-center">
          <h2 className="text-2xl text-center">
            A loyalty program that generates 3x more across its lifetime,
            turning guests into brand loyalists.
          </h2>
        </div>
        <div className=" bg-indigo-800 rounded-3xl p-5 grid place-items-center text-center">
          <h2 className="text-2xl text-center">
            Get your own restaurant and instagram page completely tailored for
            your needs.
          </h2>
        </div>
      </div>
    </div>
  );
}
