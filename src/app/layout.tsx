import type { Metadata } from "next";
import "./globals.css";

const seoKeywords = [
  "kiara travels",
  "kiara tours and travels",
  "kiara cars",
  "airport pickup india",
  "airport drop india",
  "airport taxi near me",
  "airport cab booking",
  "car rental near me",
  "cars on rent",
  "rent a car with driver",
  "cab service near me",
  "outstation cabs india",
  "outstation taxi booking",
  "family trip cab service",
  "south india temple tours",
  "goa travel package",
  "goa cab package",
  "bengaluru airport pickup",
  "bangalore airport taxi",
  "bengaluru airport drop",
  "travel agency india",
  "tour operator india",
  "vacation car rental",
  "intercity taxi service",
  "local sightseeing cab",
  "wedding travel cars",
  "corporate travel cabs",
  "family tour planner india",
  "tourist cab service",
  "reliable drivers india",
  "clean cars for travel",
  "24 7 travel support",
  "car hire near me",
  "tourist taxi near me",
  "long distance cab india",
  "travel car booking india",
  "chauffeur driven car rental",
  "budget cab booking",
  "premium airport transfer",
  "pilgrimage tour cabs",
  "temple trip taxi",
  "goa family tour",
  "weekend getaway cabs",
  "holiday transport india",
  "cab for family function",
  "driver service near me",
  "road trip cab booking",
  "all india taxi service",
  "india travel cars",
  "travel service near me",
  "car rental bangalore",
  "car rental hyderabad",
  "car rental chennai",
  "car rental mumbai",
  "car rental delhi",
  "car rental pune",
  "car rental goa",
  "car rental mysore",
  "car rental tirupati",
  "car rental coorg",
];

export const metadata: Metadata = {
  title: "Kiara Travels | Airport Pickup, Outstation Trips, Car Rental Across India",
  description:
    "Kiara Travels offers airport pickup and drop, outstation cabs, car rental, temple tours, Goa packages, and family travel support across India with clean cars and professional drivers.",
  metadataBase: new URL("https://kiara-travels.vercel.app"),
  applicationName: "Kiara Travels",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kiara Travels | Airport Pickup, Car Rental and Outstation Travel",
    description:
      "Trusted travel partner for airport transfers, outstation rides, car rental, temple tours, Goa packages, and family trips across India.",
    type: "website",
    url: "https://kiara-travels.vercel.app",
    siteName: "Kiara Travels",
    images: [
      {
        url: "/kiara-logo.svg",
        width: 256,
        height: 256,
        alt: "Kiara Tours & Travels logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiara Travels",
    description:
      "Airport pickup, outstation travel, car rental, temple tours and family trip transport across India.",
    images: ["/kiara-logo.svg"],
  },
  icons: {
    icon: "/kiara-logo.svg",
    shortcut: "/kiara-logo.svg",
    apple: "/kiara-logo.svg",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
