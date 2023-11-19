import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Gimme - commission-free Order & Pay solution for the hospitality industry",
  description:
    "Use Gimme to better serve, connect and reward your guests. Get your unique mobile app and web ordering app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div className="content-container mx-auto px-4 lg:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
