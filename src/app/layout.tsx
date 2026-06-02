import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Marco Cerilli | Sviluppatore Web Terracina, Latina e Provincia",
  description: "Sviluppatore Web freelance a Terracina e Latina. Realizzazione siti web performanti, eCommerce e Web App su misura in Next.js e React.",
  keywords: ["sviluppatore web terracina", "realizzazione siti web latina", "web agency terracina", "creazione siti web", "next.js", "seo latina", "sviluppatore web freelance"],
  openGraph: {
    title: "Marco Cerilli | Sviluppatore Web Terracina, Latina e Provincia",
    description: "Sviluppatore Web freelance a Terracina e Latina. Realizzazione siti web performanti, eCommerce e Web App su misura in Next.js.",
    type: "website",
    locale: "it_IT",
    url: "https://marcocerilli.com", 
    siteName: "Marco Cerilli Portfolio"
  }
};

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} scroll-smooth`}>
      {/* Aggiunto h-full e rimosso eventuali margini di default */}
      <body className="font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/30 min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <Header />
          {/* Rimosso <main> qui perché lo hai già in page.tsx, evitiamo doppi contenitori */}
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}