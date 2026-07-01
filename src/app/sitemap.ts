import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcocerilli.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Qui puoi aggiungere in futuro /progetti, /contatti, ecc.
  ];
}
