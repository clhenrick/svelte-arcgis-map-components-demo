<script lang="ts">
  import { onMount } from "svelte";

  const itemId = "02b37471d5d84cacbebcccd785460e94";

  let viewContainer: HTMLArcgisMapElement;
  let viewReady = $state(false);

  onMount(() => {
    viewContainer.viewOnReady().then(() => {
      viewReady = true;
    });
  });
</script>

<main>
  <h1>
    Hello, <pre> @arcgis/map-components</pre>
  </h1>
  <figure>
    <arcgis-map bind:this={viewContainer} item-id={itemId}>
      <arcgis-zoom position="top-left"></arcgis-zoom>
      <arcgis-search position="top-right"></arcgis-search>
    </arcgis-map>
  </figure>
  <p>Map view ready: {viewReady}</p>
</main>

<style>
  main {
    min-height: 100vh;
  }

  h1 {
    display: flex;
    align-items: baseline;
    margin-block-end: 1rem;
  }

  figure {
    height: 500px;
  }
</style>
