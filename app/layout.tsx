import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Dev Page",
    default: "Dev Page",
  },
  description: "This is nextjs14 dev Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 p-2">{children}</div>
      </body>
    </html>
  );
}
