import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

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
    "Open-source Python library for clinical AI fairness auditing. Detect demographic bias in healthcare ML models — AUROC subgroup analysis, calibration, DCA, equalized odds — and export governance-ready PDF/PPTX reports. HIPAA-friendly, all local, no data leaves your machine.",
  keywords: [
    "healthcare AI fairness",
    "clinical ML bias detection",
    "python fairness library",
    "fairlearn healthcare",
    "fairlearn clinical",
    "fairlearn alternative",
    "aif360 alternative",
    "aif360 healthcare",
    "aequitas python",
    "machine learning fairness python",
    "demographic bias detection",
    "demographic parity python",
    "equalized odds python",
    "disparate impact healthcare",
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
    "bias audit toolkit",
    "ai fairness toolkit python",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "https://faircare.space/",
  },
  openGraph: {
    title: "FairCareAI — Clinical AI Fairness & Bias Detection",
    description:
      "Open-source Python library for clinical AI fairness auditing. Detect demographic disparities in healthcare ML models. Governance-ready reports in minutes.",
    type: "website",
    url: "https://faircare.space",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FairCareAI — Clinical AI Fairness & Bias Detection",
    description:
      "Open-source Python library for clinical AI fairness auditing. Detect demographic disparities in healthcare ML models. Governance-ready reports in minutes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FairCareAI",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Python 3.10+",
  programmingLanguage: "Python",
  description:
    "Open-source Python library for healthcare AI fairness auditing. Detect demographic disparities in clinical ML models across race, sex, insurance, and language — with AUROC, calibration, DCA, subgroup equity metrics (demographic parity, equalized odds, predictive parity), and governance-ready HTML/PDF/PPTX reports.",
  url: "https://faircare.space",
  downloadUrl: "https://pypi.org/project/faircare/",
  softwareVersion: SITE.version,
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  codeRepository: "https://github.com/riccc-rush-lab/faircareai",
  keywords:
    "healthcare AI fairness, clinical ML, bias detection, python fairness library, fairlearn, aif360, demographic parity, equalized odds, AUROC subgroup analysis, health equity, clinical prediction model, HIPAA",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Rush University / University of Chicago",
    url: "https://www.rushu.rush.edu",
  },
  funder: {
    "@type": "Organization",
    name: "NIH / NCATS",
    url: "https://ncats.nih.gov",
    identifier: "UL1TR002389",
  },
  sameAs: [
    "https://github.com/riccc-rush-lab/faircareai",
    "https://pypi.org/project/faircare/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
