// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    svelte(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    }),
  ],

  adapter: node({
    mode: "standalone",
  }),
});
