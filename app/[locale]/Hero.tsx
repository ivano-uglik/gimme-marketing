import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin", "latin-ext"] });

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <div>
      <div className="py-8 md:py-24 text-white flex flex-col items-center gap-8 w-full">
        <div className="flex justify-center">
          <div className="md:w-[90%] mx-auto">
            <h1
              className={`${unbounded.className} uppercase font-black text-center text-2xl md:text-5xl p-4 md:p-0 leading-normal md:leading-relaxed`}
            >
              {t("title")}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <h2 className="text-center leading-relaxed lg:w-1/2">
            {t("subline")}
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            className={` ${unbounded.className} text-gimme bg-white rounded-full px-8 py-4 font-semibold hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
          >
            {t("signUpButton")}
          </button>

          <span className="text-sm">{t("noCreditCardRequired")}</span>
        </div>
      </div>
    </div>
  );
}
