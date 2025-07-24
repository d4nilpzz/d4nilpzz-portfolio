<script>
  import { cn } from '@/utils';
  let is_available = false;
</script>

<section class="delay-0 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
  <article
    class={cn(
      'prose py-4 dark:prose-invert prose-a:font-normal prose-a:decoration-neutral-500 prose-a:decoration-dotted prose-a:underline-offset-[5px] prose-a:opacity-80'
    )}
  >
    <p
      class="max-w-fit rounded-full border-[1px] border-neutral-300 px-[10px] pt-[2px] text-[14px] shadow-sm dark:border-neutral-800"
    >
      <span
        class="mr-2 inline-block h-3 w-3 rounded-full"
        style="background-color: {is_available ? '#22c55e' : '#ef4444'};"
      ></span>
      {is_available ? 'Available' : 'Currently unavailable'}
    </p>
    <p class="leading-loose">
      {`I'm`} <span class="font-bold tracking-tight">J. Daniel</span>, a full-stack web developer
      with over 1 year of experience. I enjoy building projects for fun, especially large-scale
      ones.
    </p>
  </article>
</section>
