import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiara Tours & Travels | Airport Pickup, Outstation Trips & Family Tours",
  description:
    "Kiara Tours & Travels offers airport pickup and drop, outstation rides, South India temple tours, Goa packages, and family travel with clean cars and professional drivers.",
  keywords: [
    "Kiara Tours & Travels",
    "airport pickup",
    "airport drop",
    "outstation trips",
    "South India temple tours",
    "Goa packages",
    "family tours",
    "travel agency",
  ],
  openGraph: {
    title: "Kiara Tours & Travels",
    description:
      "Trusted travel partner for airport transfers, outstation rides, temple tours, Goa packages, and family trips.",
    type: "website",
  },
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
