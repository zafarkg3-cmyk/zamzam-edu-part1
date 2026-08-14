import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
      manifest: {
        name: "Zam-Zam EDU",
        short_name: "Zam-Zam EDU",
        description:
          "Bolalar uchun inglizcha gapirish kursi — 5 ta dars, 5 ta asosiy mavzu",
        theme_color: "#0EA5B7",
        background_color: "#F4FBFB",
        display: "standalone",
        orientation: "portrait",
        start_url: "./",
        scope: "./",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        // Activate a newly-deployed service worker right away instead of
        // waiting for every open tab to be closed first. Combined with
        // registerType: "autoUpdate" above, this makes sure a new deploy
        // (e.g. this bugfix) actually reaches phones/browsers that still
        // have the app open, rather than silently keeping the old cached
        // version running.
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
  server: { host: "0.0.0.0", port: 3000 },
  preview: { host: "0.0.0.0", port: 3000 },
});
