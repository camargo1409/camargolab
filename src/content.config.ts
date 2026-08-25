import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Section metadata (heading, number, hero copy). One file per section:
// hero.md, skills.md, experiences.md, stack.md — the body is the intro text.
const sections = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sections' }),
  schema: z.object({
    title: z.string(),
    number: z.string().optional(),
    badge: z.string().optional(),
    cvLabel: z.string().optional(),
    cvHref: z.string().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
});

// Expertise cards — the body is the card description.
const skills = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    icon: z.enum(['monitor', 'server', 'system']).default('monitor'),
    tags: z.array(z.string()),
    order: z.number(),
    wide: z.boolean().default(false),
  }),
});

// Timeline entries — the body is a bullet list (top highlights, same texts as cv.md).
const experiences = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experiences' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    order: z.number(),
    current: z.boolean().default(false),
  }),
});

// The full CV, rendered at /cv. One file per locale: cv.md (EN), cv.pt.md (PT).
// The body follows the conventions documented at the top of cv.md and is
// parsed by src/lib/cv.ts.
const cv = defineCollection({
	loader: glob({ pattern: 'cv*.md', base: './src/content' }),
	schema: z.object({
		name: z.string(),
		title: z.string(),
		email: z.string(),
		phone: z.string().optional(),
		location: z.string().optional(),
		linkedin: z.string().optional(),
		github: z.string().optional(),
	}),
});

// Stack categories — frontmatter only.
const stack = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/stack' }),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { sections, skills, experiences, stack, cv };
