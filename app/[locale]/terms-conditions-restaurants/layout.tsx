import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
const locales = ["en", "de", "hr"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gimme Allgemeine Geschäftsbedingungen für Restaurants",
  description:
    "Dies ist die Website für die Allgemeinen Geschäftsbedingungen von Gimme für Restaurants.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: any;
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <section className={inter.className}>{children}</section>;
      </body>
    </html>
  );
}
