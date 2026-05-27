import {defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    platform: z.string(),
    stack: z.string(),
    website: z.string().optional(),
    github: z.string().optional(),
  }),
});

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const artsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    src: z.string(),
    thumbnail: z.string(),
    alt: z.string(),
    year: z.number().optional(),
    tool: z.string().optional(),
  }),
});

const emotesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    slides: z.array(z.object({
      url: z.string(),
      alt: z.string(),
    })).optional(),
    year: z.number().optional(),
    tool: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
  arts: artsCollection,
  emotes: emotesCollection,
};
