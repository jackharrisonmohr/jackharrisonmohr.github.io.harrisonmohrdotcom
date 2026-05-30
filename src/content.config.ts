import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    org: z.string(),
    dates: z.string(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    links: z
      .object({
        github: z.string().optional(),
        live: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog, projects };
