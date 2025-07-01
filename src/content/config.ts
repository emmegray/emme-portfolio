import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage1: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImage2: z.object({
        url: z.string(),
        alt: z.string()
      }),
      platform: z.string(),
      stack: z.string(),
      website: z.string(),
      github: z.string(),
    })
});

const artsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    date: z.string(),
    tags: z.array(z.string()),
  })
});

const emoteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    date: z.string(),
    tags: z.array(z.string()),
  })
});

export const collections = {
  projects: projectsCollection,
  arts: artsCollection,
  emote: emoteCollection,
};

