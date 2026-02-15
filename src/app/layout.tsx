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

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} scroll-smooth`}>
      {/* Aggiunto h-full e rimosso eventuali margini di default */}
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500/30 min-h-screen">
        <Header />
        {/* Rimosso <main> qui perché lo hai già in page.tsx, evitiamo doppi contenitori */}
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}