import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
