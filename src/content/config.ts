import { defineCollection } from 'astro:content';
import { z } from 'zod';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    date: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
