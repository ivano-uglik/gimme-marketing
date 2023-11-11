import Image from "next/image";
import onlineDelivery from "@/public/online-delivery.png";
import { Unbounded } from "next/font/google";
import vespa from "@/public/svg-assets/vespa.svg";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function OnlineDelivery() {
  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center gap-24 md:gap-32">
      <div className="relative">
        <Image
          src={onlineDelivery}
          className="w-[30rem] px-8 md:px-0"
          alt="Tablet screen displaying Gimme App"
          unoptimized
        />
        <div>
          <Image
            src={vespa}
            className="absolute -bottom-16 left-8 md:-bottom-24 md:left-1 w-1/3 md:w-1/2"
            alt="Woman on motorcycle 3d"
            unoptimized
          />
        </div>
      </div>
      <div className="md:w-[28%] px-8">
        <h2 className={`${unbounded.className} text-3xl font-bold`}>
          Set Up Your Online Delivery For Your Restaurant Now
        </h2>
        <h3 className="pt-8">
          Our service streamlines the online delivery for restaurants creation
          process, making it effortless for individuals to set up their online
          delivery, takeaway, dine-in service, or digital menu with just a few
          clicks.
        </h3>
        <h4 className="pt-8">
          With our user-friendly platform and intuitive interface, you can
          easily configure and launch your service, ensuring a seamless
          experience for your customers. No complex setup required!
        </h4>
        <button
          className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold my-12`}
        >
          Create Your Online Delivery
        </button>
      </div>
    </div>
  );
}
