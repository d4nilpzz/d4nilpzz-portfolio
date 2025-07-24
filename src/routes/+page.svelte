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
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="José Daniel Moreno López" />
  <meta property="og:image" content="https://d4nilpzz.dev/_.png" />
  <meta property="og:image:alt" content="banner_d4nilpzz" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="author" content="d4nilpzz" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="José Daniel Moreno López" />
  <meta name="twitter:description" content="Ready for build" />
  <meta name="twitter:image:alt" content="José Daniel Moreno López" />
  <meta name="twitter:image" content="https://d4nilpzz.dev/_.png" />
  <meta name="twitter:creator" content="d4nilpzz" />
</svelte:head>

<div class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Experience />
  <Projects />
</div>
