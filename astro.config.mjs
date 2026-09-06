import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";
import { enabledLanguages } from "./src/lib/utils/i18nUtils.ts";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import config from "./.astro/config.generated.json";
import fontsJson from "./src/config/fonts.json";
import { generateAstroFontsConfig } from "./src/lib/utils/AstroFont.ts";

import react from "@astrojs/react";

const fonts = generateAstroFontsConfig(fontsJson);

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { showDefaultLangInUrl, defaultLanguage },
  },
} = config;

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : config.site.baseUrl || "http://examplesite.com",
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  devToolbar: {
    enabled: true,
  },
  image: {
    layout: "constrained",
  },
  fonts,
  i18n: {
    locales: enabledLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [
    sitemapConfig.enable ? sitemap() : null,
    // Shortcodes are provided to MDX via the `components` prop on `<Content />`
    // (see `src/lib/shortcodes.ts`), so no auto-import integration is needed.
    mdx(),
    react(),
  ],
  markdown: {
    // Since @astrojs/mdx v6, remark/rehype plugins are configured on the
    // `unified()` processor instead of top-level `markdown.*` options.
    processor: unified({
      remarkPlugins: [
        remarkParseContent, // Parse markdown content and add classes in heading and loading="lazy" to images
        remarkToc,
      ],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            rel: "noopener noreferrer nofollow",
            target: "_blank",
          },
        ],
      ],
    }),

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      // WCAG-AA themed code: every syntax token (incl. comments) clears 4.5:1
      // against the block background, which standard themes don't guarantee.
      theme: "github-light-high-contrast", // https://shiki.style/themes
      wrap: false,
    },
  },
  vite: {
    logLevel: "error",
    build: {
      minify: true,
    },
    resolve: {
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    ssr: {
      noExternal: ["react-icons"],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "framer-motion",
        "react-icons/si",
        "react-icons/fi",
        "@preline/overlay",
        "@preline/overlay/non-auto",
        "@preline/dropdown",
        "@preline/dropdown/non-auto",
        "@preline/select/non-auto",
        "@preline/tabs/non-auto",
        "@preline/accordion/non-auto",
        "@preline/collapse/non-auto",
        "@preline/tooltip/non-auto",
        "lucide",
      ],
    },
    plugins: [tailwindcss()],
  },
});