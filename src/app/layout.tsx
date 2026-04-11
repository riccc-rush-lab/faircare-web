import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faircareai.com"),
  title: "FairCareAI — Fairness Auditing for Healthcare AI",
  description:
    "Detect demographic disparities in clinical ML models. From predictions to governance-ready reports in minutes. Open-source, HIPAA-friendly, WCAG 2.1 AA compliant.",
  keywords: [
    "healthcare",
    "fairness",
    "machine learning",
    "clinical AI",
    "bias detection",
    "responsible AI",
    "equity",
    "audit",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "FairCareAI — Fairness Auditing for Healthcare AI",
    description:
      "Detect demographic disparities in clinical ML models. Governance-ready reports in minutes.",
    type: "website",
    url: "https://faircareai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "FairCareAI — Fairness Auditing for Healthcare AI",
    description:
      "Detect demographic disparities in clinical ML models. Governance-ready reports in minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
