<script lang="ts">
  type Item = {
    key: string;
    value: string;
  };

  type Props = {
    items: Item[];
  };

  const { items }: Props = $props();
</script>

{#snippet dlItem(key: string, value: string)}
  <dt>{key}</dt>
  <dd>{@html value}</dd>
{/snippet}

<dl>
  {#each items as { key, value } (key)}
    {@render dlItem(key, value)}
  {/each}
</dl>

<style>
  dl {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  dt,
  dd {
    margin: 0;
  }

  dt {
    font-weight: bold;
  }
</style>
