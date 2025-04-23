// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";

export const metadata: Metadata = {
  title: "CONSTRUINGENIO",
  description: "Donde cada detalle cuenta una historia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        {children}
        <Footer />
        <FloatingSocialButtons />
        </body>
    </html>
  );
}
