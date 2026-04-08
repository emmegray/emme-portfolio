import { z, defineCollection } from "astro:content";

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
  loader: file("src/content/emotes/**/*.md
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
  loader: file("src/content/posts/**/*.md"
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
