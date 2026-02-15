import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M Solutions  | Sviluppo Web Next.js e Soluzioni Aziendali",
  description: "Portfolio professionale: siti web Next.js ultra-veloci e design moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Rimuoviamo la classe "dark"
    <html lang="it" className={`${inter.variable} scroll-smooth`}>
      {/* 2. Cambiamo bg-gray-950 in bg-slate-50 e text-gray-100 in text-slate-900 */}
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500/30">
        <Header />
        <main>{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}