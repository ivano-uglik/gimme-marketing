import industry from "@/public/primary-4.webp";
import Image from "next/image";

export default function SectionFour() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-4 md:gap-0 container mx-auto">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={industry}
          alt="Shopping Cart"
          className="md:w-[75%]"
          unoptimized
        />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="md:w-[75%] flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Set Up Your Online Delivery For Your Restaurant now
          </h2>
          <p className="opacity-75 text-center md:text-left">
            Our service streamlines the online delivery for restaurants creation
            process, making it effortless for individuals to set up their online
            delivery, takeaway, dine-in service, or digital menu with just a few
            clicks. With our user-friendly platform and intuitive interface, you
            can easily configure and launch your service, ensuring a seamless
            experience for your customers.
            <b className="font-bold"> No complex setup required!</b>
          </p>
          <div className="mx-auto md:mx-0">
            <button className="bg-[#3c1e85] text-white hover:bg-black dark:hover:text-white hover:bg-main transition-colors font-bold px-4 md:px-8 py-4 leading-none rounded-full border-none">
              <a href="/"> Create your Online Delivery </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
