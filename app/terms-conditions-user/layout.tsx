import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Gimme Plattformbedingungen für Endkunden",
  description:
    "Die Plattformbedingungen für Endkunden von Gimme ist eine Website, die umfassende Informationen für Endbenutzer bereitstellt, die die Gimme-Plattform nutzen.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={inter.className}>{children}</section>;
}
