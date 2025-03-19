import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        author: z.string(),
    }),
});

const travelGuide = defineCollection({
    loader: glob({
        base: "./src/content/travel-guide",
        pattern: "**/*.{md,mdx}",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        updatedDate: z.coerce.date(),
        heroImage: z.string().optional(),
    }),
});

const travelDiary = defineCollection({
    loader: glob({
        base: "./src/content/travel-diary",
        pattern: "**/*.{md,mdx}",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
        author: z.string(),
    }),
});

export const collections = { blog, travelGuide, travelDiary };
