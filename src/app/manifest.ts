import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dexter E. Balbuena | E-Commerce & Administrative VA",
    short_name: "Dexter VA",
    description:
      "Official portfolio of Dexter E. Balbuena — E-Commerce & Administrative Virtual Assistant with technical systems rigor.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#8c532b",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/portrait.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
