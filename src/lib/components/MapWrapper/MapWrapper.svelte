<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    /** the child element to render in the figure */
    children?: Snippet;
    /** optional caption to use as a figcaption */
    caption?: string;
    /** the height of the figure's child in CSS pixels */
    height?: number;
  };

  const { children, caption, height = 500 }: Props = $props();
</script>

<figure style="--height:{height}px;">
  {@render children?.()}
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  figure {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  figure :global(> :first-child) {
    flex-basis: var(--height);
    flex-grow: 999;
  }

  figure :global(> :last-child) {
    flex-grow: 1;
  }
</style>
