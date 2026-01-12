// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
// Use the serverless-specific import for Vercel
import vercel from "@astrojs/vercel/serverless"; 

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Set output to 'server' to enable SSR on Vercel
  output: 'server', 
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    svelte(),
    sanity({
      projectId: "fv4ogx5c",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
  ],

  adapter: vercel(),
});
