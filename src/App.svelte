<script module>
  const paramsParsed = parseUrlQueryParams();
  const config = resolveConfig(paramsParsed);
</script>

<script lang="ts">
  import ArcGisMap from "./lib/components/ArcGisMap/ArcGisMap.svelte";
  import MapWrapper from "./lib/components/MapWrapper/MapWrapper.svelte";
  import DescriptionList from "./lib/components/DescriptionList/DescriptionList.svelte";
  import { mapState } from "./lib/state";
  import { parseUrlQueryParams } from "./lib/utils";
  import { resolveConfig } from "./lib/config";

  /** map caption for the <figure> wrapper's <figcaption> */
  const caption = `This map depicts a heat map of various types of energy sources in the United States such as gas, solar, and wind.`;

  /** derived / computed svelte state that we pass to the description list */
  const mapStateReadOut = $derived.by(() => {
    const descListData = {
      "View ready": mapState.ready,
      "Map center": mapState.center,
      "Map zoom": mapState.zoom,
    };
    return Object.entries(descListData).map(([key, value]) => ({
      key,
      value: JSON.stringify(value, null, 2),
    }));
  });
</script>

<main>
  <h1>Hello, ArcGIS Map Components + Svelte</h1>
  <MapWrapper {caption}>
    <svelte:boundary>
      <ArcGisMap {...config} />
      {#snippet failed(error)}
        <p>Something went wrong: {String(error)}</p>
      {/snippet}
    </svelte:boundary>
  </MapWrapper>
  <p>
    Some arcgis-map properties tracked using Svelte state. Refresh the page
    and/or move the map to see them update.
  </p>
  <DescriptionList items={mapStateReadOut} />
</main>

<style>
  main {
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
  }

  h1 {
    margin-block-end: 1rem;
  }
</style>
