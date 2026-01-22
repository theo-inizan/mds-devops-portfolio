import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaroInitializer } from "@/components/FaroInitializer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Théo - Développeur Full Stack | Portfolio",
  description: "Portfolio de Théo, Développeur Full Stack avec 3 ans d'expérience en alternance. Spécialisé en Python, React, Next.js, scraping de données et développement web/mobile.",
  keywords: ["Développeur Full Stack", "Python", "React", "Next.js", "Scraping", "PostgreSQL", "MongoDB", "Docker"],
  authors: [{ name: "Théo" }],
  openGraph: {
    title: "Théo - Développeur Full Stack",
    description: "Portfolio professionnel - 3 ans d'expérience en développement web et scraping de données",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <FaroInitializer />
        {children}
      </body>
    </html>
  );
}
