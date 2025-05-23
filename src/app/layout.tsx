import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-Blog App",
  description: "Explore the world of Tech with Muhammad Usman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${font.className} antialiased`}>
        <div className="max-w-[1600px] mx-auto">
          <Navbar/>
          {children}
          <Footer/>
          </div>
      </body>
    </html>
  );
}
