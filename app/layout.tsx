import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nldentalfargo.com"),
  title: {
    default: "Northern Lights Dental — Family Dentistry in Fargo, ND",
    template: "%s | Northern Lights Dental",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "dentist Fargo ND",
    "family dentist Fargo",
    "Northern Lights Dental",
    "dental cleanings Fargo",
    "same-day crowns Fargo",
    "dental implants Fargo",
    "kids dentist Fargo",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: "Northern Lights Dental — Family Dentistry in Fargo, ND",
    description: site.description,
    images: [
      {
        url: "/images/hero-aurora.jpg",
        width: 1500,
        height: 430,
        alt: "Northern Lights Dental in Fargo, North Dakota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Lights Dental — Family Dentistry in Fargo, ND",
    description: site.description,
    images: ["/images/hero-aurora.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06181d",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: "https://nldentalfargo.com",
  telephone: "+1-701-551-2000",
  email: site.email,
  image: "https://nldentalfargo.com/images/hero-aurora.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4150 19th Ave S, Suite 301",
    addressLocality: "Fargo",
    addressRegion: "ND",
    postalCode: "58103",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: site.socials.map((social) => social.href),
  areaServed: "Fargo-Moorhead area",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream text-ink">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
