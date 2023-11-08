export default function SectionSeven() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center radial text-white py-16 px-4 text-3xl">
      <h2 className="font-bold md:max-w-[80%] leading-relaxed">
        {
          "Gimme provides a smooth and irresistible ordering experience with a user-friendly interface that aligns with your brand, ensuring quick checkouts. In addition to a stunning ordering app, you'll also receive a"
        }
        <b className="font-black">
          {" custom-made website that's even more impressive"}
        </b>
      </h2>
      <button className="bg-white text-black hover:bg-[#3c1e85] dark:hover:text-white hover:bg-main transition-colors font-bold px-4 md:px-8 py-4 leading-none rounded-full border-none text-xl">
        <a href="/register"> Get started for Free </a>
      </button>
    </div>
  );
}
