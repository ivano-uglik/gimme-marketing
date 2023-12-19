import Image from "next/image";
import onlineDelivery from "@/public/online-delivery.png";
import { Unbounded } from "next/font/google";
import vespa from "@/public/svg-assets/vespa.svg";
import { useTranslations } from "next-intl";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function OnlineDelivery() {
  const t = useTranslations("Quote");
  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center gap-24">
      <div className="relative basis-1/2">
        <Image
          src={onlineDelivery}
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
      <div className="basis-1/2">
        <h2 className={`${unbounded.className} text-3xl font-bold`}>
          {t("cardTitle")}
        </h2>
        <h3 className="pt-8">{t("cardSubline")}</h3>
        <button
          className={`${unbounded.className} px-4 py-2 bg-white rounded-full text-gimme font-semibold my-12 hover:text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out`}
        >
          {t("button")}
        </button>
      </div>
    </div>
  );
}
