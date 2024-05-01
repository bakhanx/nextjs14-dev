import SideNavigation from "@/components/sideNavigation";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <SideNavigation />
      <div className="pl-24">{children}</div>
    </div>
  );
}
