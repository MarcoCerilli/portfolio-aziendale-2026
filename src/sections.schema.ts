import { z } from "astro/zod";

export const demoSection = z.object({
  projects: z.array(z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    url: z.url(),
    category: z.string().min(1),
    price: z.number().nullable(),
    image: z.string().nullable(),
    features: z.array(z.string().min(1)).min(1),
  })),
  features: z.record(z.string(), z.array(z.string().min(1)).min(1)),
});
