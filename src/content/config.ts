import { z, defineCollection } from "astro:content";
import { array } from "astro:schema";

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
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
  }),
});

const artsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    src: z.string(),
    thumbnail: z.string(),
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
    }),),
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
