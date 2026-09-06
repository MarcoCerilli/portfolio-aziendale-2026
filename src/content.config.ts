import { defineCollection } from "astro:content";
import { button, cookieNoticeSchema } from "./sections.schema";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const contentLoader = (base: string) =>
  glob({ pattern: "**/[^_]*.{md,mdx}", base });

// Universal Page Schema
export const page = z.object({
  title: z.string(),
  cookieNotice: cookieNoticeSchema.optional(),
  author: z.string().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  date: z.date().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
  button: button.optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  robots: z.string().optional(),
  excludeFromSitemap: z.boolean().optional(),
  excludeFromCollection: z.boolean().optional(),
  customSlug: z.string().optional(),
  canonical: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  disableTagline: z.boolean().optional(),
  hasFooterDarkBackground: z.boolean().optional(),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: contentLoader("./src/content/pages"),
  schema: page,
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: contentLoader("./src/content/homepage"),
  schema: page,
});

// Export collections
export const collections = {
  pages: pagesCollection,
  homepage: homepageCollection,
};


