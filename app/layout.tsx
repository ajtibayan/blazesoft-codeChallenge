import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blazesoft Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
