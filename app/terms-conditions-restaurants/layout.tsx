import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gimme Allgemeine Geschäftsbedingungen für Restaurants",
  description:
    "Dies ist die Website für die Allgemeinen Geschäftsbedingungen von Gimme für Restaurants.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
