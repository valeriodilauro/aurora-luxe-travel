import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURORA LUXE TRAVEL — Beyond First Class",
  description:
    "Ultra-premium concierge travel experiences. Curated journeys from private islands to Michelin-starred evenings — your world, elevated.",
  keywords: [
    "luxury travel",
    "concierge",
    "premium travel",
    "private jet",
    "luxury vacations",
    "exclusive destinations",
  ],
  openGraph: {
    type: "website",
    title: "AURORA LUXE TRAVEL — Beyond First Class",
    description:
      "Ultra-premium concierge travel experiences for those who demand the extraordinary.",
    siteName: "Aurora Luxe Travel",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURORA LUXE TRAVEL — Beyond First Class",
    description:
      "Ultra-premium concierge travel experiences for those who demand the extraordinary.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-aurora-black text-aurora-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
