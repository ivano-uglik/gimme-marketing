import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { unstable_setRequestLocale } from "next-intl/server";
const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "de", "hr"];

export const metadata: Metadata = {
  title:
    "Gimme - commission-free Order & Pay solution for the hospitality industry",
  description:
    "Use Gimme to better serve, connect and reward your guests. Get your unique mobile app and web ordering app.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: any) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div className="content-container mx-auto px-4 lg:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
