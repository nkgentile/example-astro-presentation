import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

const { SANITY_DATASET, SANITY_PROJECT_ID } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  output: "hybrid",

  server: {
    port: 3333,
  },

  integrations: [
    react(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,

      studioBasePath: "/studio",
    }),
  ],
});
