import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    siteName: "Marco Cerilli Portfolio",
    images: [
      {
        url: "https://marcocerilli.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marco Cerilli - Sviluppatore Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Cerilli | Sviluppatore Web Terracina",
    description: "Sviluppatore Web freelance a Terracina e Latina. Realizzazione siti web performanti in Next.js e React.",
    images: ["https://marcocerilli.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marco Cerilli - Sviluppatore Web",
    "image": "https://marcocerilli.com/og-image.jpg",
    "url": "https://marcocerilli.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "addressCountry": "IT"
    },
    "description": "Sviluppatore Web freelance a Terracina e Latina. Realizzazione siti web performanti, eCommerce e Web App su misura in Next.js e React.",
  };

  return (
    <html lang="it" className={`${inter.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/30 min-h-screen transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          <Header />
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
