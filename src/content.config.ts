import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lang = z.enum(['pt', 'en']);

const blog = defineCollection({
  loader: glob({ pattern: '{pt,en}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang,
    category: z.string(),
    tags: z.array(z.string()).default([]),
    /** Shared between the pt and en versions of the same post. */
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    /** Original URL when the article was first published elsewhere (e.g. dev.to); used as rel=canonical. */
    canonicalUrl: z.string().url().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '{pt,en}/**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang,
    type: z.enum(['employment', 'product']),
    role: z.string().optional(),
    company: z.string().optional(),
    period: z.string().optional(),
    liveUrl: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    translationKey: z.string(),
    // Optional sections; rendered only when present. The markdown body is the main content.
    context: z.string().optional(),
    constraints: z.string().optional(),
    solution: z.string().optional(),
    decisions: z.string().optional(),
    results: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    /** Short note shown under metrics (e.g. where the numbers come from). */
    metricsNote: z.string().optional(),
  }),
});

export const collections = { blog, work };
