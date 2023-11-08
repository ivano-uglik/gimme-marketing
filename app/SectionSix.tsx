import industry from "@/public/primary-4.webp";
import Image from "next/image";

export default function SectionSix() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-4 md:gap-0 container mx-auto">
      <div className="md:w-1/2 flex justify-center">
        <div className="md:w-[75%] flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            A BRANDED GUEST EXPERIENCE THAT CONVERTS
          </h2>
          <p className="opacity-75 text-center md:text-left">
            {
              "Customization is key, and at Gimme, we understand the personal touch. Create an app that resonates with your brand's voice, colors, and imagery, making every tap, swipe, and scroll uniquely yours "
            }
          </p>
          <div className="mx-auto md:mx-0">
            <button className="bg-[#3c1e85] text-white hover:bg-black dark:hover:text-white hover:bg-main transition-colors font-bold px-4 md:px-8 py-4 leading-none rounded-full border-none">
              <a href="/"> Customize your Online Restaurant Now </a>
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={industry}
          alt="Shopping Cart"
          className="md:w-[75%]"
          unoptimized
        />
      </div>
    </div>
  );
}
