import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pkg",
  description: "A simple cross-platform package manager",
  srcExclude: ["README.md", "**.tmpl.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Packages",
        link: "/packages",
      },
    ],
    aside: false,
    socialLinks: [{ icon: "github", link: "https://github.com/pkg-mngr/pkg" }],
  },
});
