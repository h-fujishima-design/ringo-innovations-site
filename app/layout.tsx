import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Ringo Innovations — AI Creative Services",
  description:
    "Ringo Innovations delivers AI-powered creative work — from brand visuals to content strategy. Based in Toronto.",
  openGraph: {
    title: "Ringo Innovations — AI Creative Services",
    description:
      "AI-driven creative work for brands and businesses. Fast, smart, and uniquely yours.",
    siteName: "Ringo Innovations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}