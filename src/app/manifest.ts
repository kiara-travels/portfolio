import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kiara Travels",
    short_name: "Kiara Travels",
    description:
      "Kiara Travels offers airport pickup and drop, outstation trips, family tours, temple tours, and car rental support across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#071018",
    theme_color: "#071018",
    icons: [
      {
        src: "/kiara-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
