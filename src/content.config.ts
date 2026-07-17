import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    categoryKey: z.string(),
    year: z.string(),
    description: z.string(),
    tech: z.string(),
    url: z.string().url(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: file("src/data/team.json"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    skills: z.array(z.string()),
    accent: z.string(),
  }),
});

export const collections = { projects, team };
