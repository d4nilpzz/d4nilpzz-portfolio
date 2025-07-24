<script lang="ts">
  import { onMount } from 'svelte';
  import Badge from '@/ui/badge/badge.svelte';
  import Input from '@/ui/input/input.svelte';
  import { ArrowUpRight, GitForkIcon, SearchIcon, StarIcon } from 'lucide-svelte';
  import { routeAnimation } from '@/ui/shared';

  let searchTerm = $state('');

  const repos = [
    {
      name: 'unusual-cache',
      owner: 'd4nilpzz',
      description:
        'Is a lightweight, pluggable caching middleware for express.js',
      topics: ['cache', 'middleware'],
    }
  ];

  let fullRepos = repos.map((repo) => ({
    ...repo,
    html_url: `https://github.com/${repo.owner}/${repo.name}`,
    stargazers_count: 0
  }));

  onMount(async () => {
    for (let repo of fullRepos) {
      const res = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`);
      if (res.ok) {
        const data = await res.json();
        repo.stargazers_count = data.stargazers_count;
      }
    }
  });

  let filteredRepos = $derived(
    searchTerm
      ? fullRepos.filter((repo) => repo.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : fullRepos.sort((a, b) => b.stargazers_count - a.stargazers_count)
  );

  const handleSearch = (e: Event) => {
    searchTerm = (e.target as HTMLInputElement).value.trim();
  };
</script>

<svelte:head>
  <title>Projects - J. Daniel Moreno López</title>
  <meta property="og:title" content="J. Daniel Moreno López" />
  <meta property="og:description" content="Building amazing things" />
  <meta name="image" property="og:image" content="https://d4nilpzz.dev/images/banner.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<main class={routeAnimation}>
  <div class="relative mb-5">
    <SearchIcon
      class="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-500 dark:text-neutral-400"
      size={18}
      strokeWidth={1.5}
    />
    <Input
      type="search"
      autocomplete="off"
      autofocus
      class="h-10 pl-10 shadow-sm"
      placeholder="Search Repositories"
      on:input={handleSearch}
    />
  </div>
  <div
    class="mb-4 flex w-full items-center justify-between space-x-2 text-neutral-600 dark:text-neutral-400"
  >
    <div class="flex items-center space-x-2">
      <GitForkIcon size={14} strokeWidth={1.5} />
      <p class="font-mono text-xs">
        {repos.length}
        {repos.length > 1 ? 'repositories' : 'repository'}
      </p>
    </div>
    <a
      href="https://github.com/d4nilpzz?tab=repositories"
      class="group flex items-center space-x-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="font-mono text-xs"> View on GitHub </span>
      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        class="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
      />
    </a>
  </div>
  <div class="flex flex-col space-y-3">
    {#each filteredRepos as item}
      <div
        class="flex flex-col space-y-2 rounded-md border border-neutral-300 p-3 dark:border-neutral-800"
      >
        <div class="flex w-full items-center justify-between">
          <a
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center space-x-2 font-medium duration-100 hover:opacity-80"
          >
            <span>{item.name}</span>
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              class="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
            />
          </a>
          <span
            class="group flex cursor-default items-center space-x-2 text-neutral-600 dark:text-neutral-400"
          >
            <StarIcon
              size={14}
              strokeWidth={1.5}
              class="duration-200 group-hover:text-yellow-600"
            />
            <p class="font-mono text-xs">{item.stargazers_count}</p>
          </span>
        </div>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">{item.description}</p>
        <div class="flex items-center space-x-2 overflow-y-auto">
          {#each item.topics as tag}
            <Badge>
              {tag}
            </Badge>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>
