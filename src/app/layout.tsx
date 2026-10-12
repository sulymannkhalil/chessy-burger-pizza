import type { Metadata } from "next";
import { Archivo_Black, Bubblegum_Sans, Quicksand } from "next/font/google";
import { restaurant } from "@/config/restaurant";
import { mediaPaths } from "@/data/media";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.siteUrl),
  title: {
    default: `${restaurant.name} | Pizza & Burgers`,
    template: `%s | ${restaurant.name}`,
  },
  description:
    "Professional restaurant showcase for Chessy Pizza and Burger — explore the menu, gallery, reviews, and visit details.",
  icons: {
    icon: [{ url: mediaPaths.logo, type: "image/png" }],
    apple: [{ url: mediaPaths.logo, type: "image/png" }],
    shortcut: mediaPaths.logo,
  },
  openGraph: {
    title: restaurant.name,
    description:
      "Bold pizza and burger flavors in a modern neighborhood restaurant experience.",
    type: "website",
    siteName: restaurant.name,
    images: [{ url: mediaPaths.logo, alt: `${restaurant.name} logo` }],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${archivoBlack.variable} ${bubblegumSans.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
