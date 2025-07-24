import type { Component } from 'svelte';
import type { Stack } from '@/types/featuredProjects.types';

import Svelteicon from '@/icons/svelteicon.svelte';
import T3 from '@/icons/t3.svelte';
import Go from '@/icons/go.svelte';
import Astro from '@/icons/astro.svelte';
import Nextjs from '@/icons/nextjs.svelte';
import Tailwindcss from '@/icons/tailwindcss.svelte';
import React from '@/icons/react.svelte';
import Prisma from '@/icons/prisma.svelte';
import Turborepo from '@/icons/turborepo.svelte';
import Shadcnui from '@/icons/shadcnui.svelte';
import Upstash from '@/icons/upstash.svelte';
import TypeScript from '@/icons/typescript.svelte';
import Nodejs from '@/icons/nodejs.svelte';

interface Technologies {
  stack: Stack;
  icon: Component;
}

export const technologies: Technologies[] = [
  {
    stack: 'Turborepo',
    icon: Turborepo
  },
  {
    stack: 'Go',
    icon: Go
  },
  {
    stack: 'Node.js',
    icon: Nodejs
  },
  {
    stack: 'Upstash',
    icon: Upstash
  },
  {
    stack: 'Next.js',
    icon: Nextjs
  },
  {
    stack: 'Tailwind CSS',
    icon: Tailwindcss
  },
  {
    stack: 'Svelte',
    icon: Svelteicon
  },
  {
    stack: 'TypeScript',
    icon: TypeScript
  },
  {
    stack: 'T3 Stack',
    icon: T3
  },
  {
    stack: 'Astro',
    icon: Astro
  },
  {
    stack: 'React',
    icon: React
  },
  {
    stack: 'Prisma',
    icon: Prisma
  },
  {
    stack: 'shadcn/ui',
    icon: Shadcnui
  }
];
