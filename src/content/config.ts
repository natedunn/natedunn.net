import { defineCollection } from 'astro:content';
import { z } from 'zod';

const exampleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  example: exampleCollection,
};
