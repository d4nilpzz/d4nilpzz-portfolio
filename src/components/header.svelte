<script>
  import { buttonVariants } from '@/ui/button';

  import Github from '@/icons/github.svelte';
  import Linkedin from '@/icons/linkedin.svelte';
    import Discord from '@/icons/discord.svelte';

  const SocialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/d4nilpzz',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/d4nilpzz',
      icon: Github
    },
    {
      name: 'Discord',
      url: 'https://discord.d4nilpzz.dev',
      icon: Discord
    }
  ];
</script>

<nav
  class="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80"
>
  <a
    href="/"
    class="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
  >
    <span>d4nilpzz.dev</span>
  </a>
  <div class="flex items-center space-x-1">
    {#each SocialLinks as { name, url, icon, iconSize }, i}
      {@const SvelteComponent = icon}
      <a
        href={url}
        title={name}
        target="_blank"
        rel="noopener noreferrer"
        class={buttonVariants({
          variant: 'ghost',
          size: 'icon',
          class: 'opacity-80 transition-opacity duration-150 hover:opacity-100'
        })}
      >
        <SvelteComponent height={iconSize ? iconSize : 18} />
      </a>
    {/each}
  </div>
</nav>
