<script lang="ts">
  import { onMount } from "svelte";

  const itemId = "02b37471d5d84cacbebcccd785460e94";

  let viewContainer: HTMLArcgisMapElement;
  let viewReady = $state(false);

  onMount(() => {
    viewContainer.viewOnReady().then(() => {
      viewReady = true;
      // it's now safe to do stuff with the viewContainer and MapView
    });
  });
</script>

<main>
  <h1>Hello, ArcGIS Map Components</h1>
  <figure>
    <arcgis-map bind:this={viewContainer} item-id={itemId}>
      <arcgis-zoom position="top-left"></arcgis-zoom>
      <arcgis-search position="top-right"></arcgis-search>
    </arcgis-map>
    <figcaption>
      This map depicts a heat map of various types of energy sources in the
      United States such as gas, solar, and wind.
    </figcaption>
  </figure>
  <div role="status">Map view ready: {viewReady}</div>
</main>

<style>
  main {
    min-height: 100vh;
  }

  h1 {
    margin-block-end: 1rem;
  }

  figure {
    display: flex;
    flex-direction: column;
  }

  :global(figure > :first-child) {
    flex-basis: 500px;
    flex-grow: 999;
  }

  :global(figure > :last-child) {
    flex-grow: 1;
  }
</style>
