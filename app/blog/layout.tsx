import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gimme Blog",
  description:
    "Official Gimme Blog - Get the latest insights into the development and news on Gimme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
