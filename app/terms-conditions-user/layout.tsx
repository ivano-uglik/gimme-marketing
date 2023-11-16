import type { Metadata } from "next";
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
  return <section>{children}</section>;
}
