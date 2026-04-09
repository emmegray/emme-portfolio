import {defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  type: "content",
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

const artsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    src: z.string(),
    thumbnail: z.string().optional(),
    alt: z.string(),
    year: z.number(),
    tool: z.string(),
  }),
});

const emoteCollection = defineCollection({
  type: "content",
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
    })),
    year: z.number(),
    tool: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
  arts: artsCollection,
  emotes: emoteCollection,
  posts: postsCollection,
};
