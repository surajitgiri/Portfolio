import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Surajit Giri Portfolio",
        short_name: "Surajit",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "32x32 48x48 64x64",
                type: "image/x-icon"
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png"
            }
        ]
    };
}