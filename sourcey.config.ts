import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "1Password Connect Docs",
  theme: {
    name: "default",
  },
  navigation: {
    tabs: [
      {
        tab: "Documentation",
        slug: "",
        source: markdown({
          groups: [
            {
              group: "Getting Started",
              pages: ["introduction"],
            },
          ],
        }),
      },
      {
        tab: "API Reference",
        slug: "api",
        source: openapi("./1password-connect.json"),
      },
    ],
  },
});
