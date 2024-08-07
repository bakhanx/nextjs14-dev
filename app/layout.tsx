import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/components/navigation";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

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
        <CounterStoreProvider>
          {/* <Navigation /> */}
          <div className="p-1">{children}</div>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
