<script lang="ts">
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>J. Daniel Moreno López - d4nilpzz.dev</title>
  <meta property="og:title" content="José Daniel Moreno López" />
  <meta property="og:description" content="Ready for build" />
  <meta name="image" property="og:image" content="https://d4nilpzz.dev/images/banner.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<div class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Experience />
  <Projects />
</div>
