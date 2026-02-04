import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const cabinet = localFont({
  src: "../public/fonts/CabinetGrotesk-Regular.woff2",
  variable: "--font-cabinet",
});


export const metadata: Metadata = {
  title: "Tekrise",
  description: "Tekrise Academy is a tech training institute committed to raising the next generation of African tech professionals. We focus on practical tech education that prepares students for real jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinet.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
