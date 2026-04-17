// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightCatppuccin from "@catppuccin/starlight";

export default defineConfig({
  site: "https://vertex-run.github.io",
  integrations: [
    starlight({
      title: "Vertex",
      description: "A modern programming language for Salesforce development.",
      social: [],
      sidebar: [],
      plugins: [starlightCatppuccin()],
    }),
  ],
});
