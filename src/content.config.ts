import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// --- Astro News Schemas ---
import {
  articleSchema,
  authorSchema as newsAuthorSchema,
  categorySchema,
  viewSchema, 
  blogSchema,
} from "@/lib/schema";

// --- News: Articles Collection ---
const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) => blogSchema(image),
});


// --- Erudite: Authors Collection (moved to erudite-authors/) ---
const eruditeAuthors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/erudite-authors" }),
  schema: z.object({
    name: z.string(),
    pronouns: z.string().optional(),
    avatar: z.string().url().or(z.string().startsWith("/")),
    bio: z.string().optional(),
    mail: z.string().email().optional(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
  }),
});

// --- Erudite: Projects Collection ---
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      link: z.string().url(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
    }),
});

// --- News: Articles Collection ---
const articles = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/articles" }),
  schema: ({ image }) => articleSchema(image),
});

// --- News: Views Collection ---
const views = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/views" }),
  schema: viewSchema,
});

// --- News: Categories Collection ---
const categories = defineCollection({
  loader: glob({ pattern: "**/index.json", base: "./src/content/categories" }),
  schema: categorySchema,
});

// --- News: Authors Collection (kept in authors/) ---
const authors = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/authors" }),
  schema: ({ image }) => newsAuthorSchema(image),
});

// --- Export All Collections ---
export const collections = {
  blog,
  eruditeAuthors, // Erudite-specific authors
  projects,
  articles,       // News
  views,
  categories,
  authors,    // News-specific authors
};
