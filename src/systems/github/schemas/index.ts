import { z } from 'zod';

export const User = z.object({
  avatar_url: z.string().optional(),
  url: z.string(),
  login: z.string(),
});

export type User = z.infer<typeof User>;

export const Repo = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullish(),
  Language: z.string().nullish(),
  stargazers_count: z.number(),
  fork: z.boolean(),
});

export type Repo = z.infer<typeof Repo>;

export const Repos = z.array(Repo);

export type Repos = z.infer<typeof Repos>;
