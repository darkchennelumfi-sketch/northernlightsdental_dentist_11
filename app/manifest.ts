import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Northern Lights Dental",
    short_name: "NLD",
    description:
      "Professional dental care in a warm, welcoming environment for ages 1 to 101+ in Fargo, North Dakota.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#06181d",
    icons: [
      {
        src: "/favicon.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
  };
}
