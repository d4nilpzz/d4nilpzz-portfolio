export type Stack =
  | 'Next.js'
  | 'Tailwind CSS'
  | 'React'
  | 'Svelte'
  | 'TypeScript'
  | 'Turborepo'
  | 'T3 Stack'
  | 'Hono'
  | 'Node.js'
  | 'Upstash'
  | 'Astro'
  | 'Go'
  | 'Prisma'
  | 'shadcn/ui';

export interface iProjects {
  title: string;
  description: string;
  tags: Stack[];
  url?: string;
  githubUrl?: string;
  icon?: string;
  latest?: boolean;
  updated?: boolean;
}
