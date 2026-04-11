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
  metadataBase: new URL("https://faircare.space"),
  title: "FairCareAI — Clinical AI Fairness & Bias Detection | Python Library",
  description:
    "Open-source Python library for healthcare AI fairness auditing. Detect demographic bias in clinical ML models across race, sex, and insurance — with governance-ready reports, AUROC subgroup analysis, calibration, and HIPAA-friendly local processing.",
  keywords: [
    "healthcare AI fairness",
    "clinical ML bias detection",
    "python fairness library",
    "fairlearn healthcare",
    "fairlearn clinical",
    "aif360 alternative",
    "machine learning fairness python",
    "demographic bias detection",
    "responsible AI healthcare",
    "clinical prediction model audit",
    "health equity AI",
    "subgroup analysis python",
    "AUROC subgroup",
    "algorithmic fairness clinical",
    "healthcare ML governance",
    "sklearn fairness",
    "health disparity machine learning",
    "clinical AI bias",
    "fairness metrics healthcare",
    "open source fairness audit",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "FairCareAI — Clinical AI Fairness & Bias Detection",
    description:
      "Open-source Python library for healthcare AI fairness auditing. Detect demographic disparities. Governance-ready reports in minutes.",
    type: "website",
    url: "https://faircare.space",
  },
  twitter: {
    card: "summary_large_image",
    title: "FairCareAI — Clinical AI Fairness & Bias Detection",
    description:
      "Open-source Python library for healthcare AI fairness auditing. Detect demographic disparities. Governance-ready reports in minutes.",
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
