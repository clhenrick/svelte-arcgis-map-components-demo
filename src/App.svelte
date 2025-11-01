<script lang="ts">
  import ArcGisMap from "./lib/components/ArcGisMap/ArcGisMap.svelte";
  import MapWrapper from "./lib/components/MapWrapper/MapWrapper.svelte";
  import DescriptionList from "./lib/components/DescriptionList/DescriptionList.svelte";
  import { mapState } from "./lib/state";

  /** ArcGIS Online portal item / web map id */
  const itemId = "02b37471d5d84cacbebcccd785460e94";

  /** map caption for the <figure> wrapper's <figcaption> */
  const caption = `This map depicts a heat map of various types of energy sources in the United States such as gas, solar, and wind.`;

  /** derived / computed svelte state that we pass to the description list */
  const mapStateReadOut = $derived.by(() => {
    const o = {
      "View Ready": mapState.ready,
      "Map center": mapState.center,
      "Map zoom": mapState.zoom,
    };
    const entries = Object.entries(o);
    return entries.map(([k, v]) => ({
      key: k,
      value: JSON.stringify(v, null, 2),
    }));
  });
</script>

<main>
  <h1>Hello, ArcGIS Map Components + Svelte</h1>
  <MapWrapper {caption}>
    <ArcGisMap {itemId} />
  </MapWrapper>
  <p>Some arcgis-map properties tracked using Svelte state. Refresh the page and/or move the map to see them update. </p>
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
