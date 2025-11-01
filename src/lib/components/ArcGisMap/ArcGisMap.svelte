<script lang="ts">
  import "@arcgis/map-components/components/arcgis-map";
  import "@arcgis/map-components/components/arcgis-zoom";
  import "@arcgis/map-components/components/arcgis-search";
  import { onMount } from "svelte";
  import { mapState } from "../../state";
  import { isValidNumber } from "../../utils";

  type Props = {
    /** map center as longitude, latitude */
    center?: [number, number];
    /** map zoom level */
    zoom?: number;
    /** AGO item id of a WebMap to load */
    itemId?: string;
  };

  const { center, zoom, itemId }: Props = $props();

  /** reference to the arcgis-map element */
  let viewContainer: HTMLArcgisMapElement;

  function onarcgisViewChange() {
    if (!viewContainer) return;
    const { longitude, latitude } = viewContainer.center || {};
    if (isValidNumber(longitude) && isValidNumber(latitude)) {
      mapState.center = [longitude, latitude];
    }
    if (isValidNumber(viewContainer.zoom)) {
      mapState.zoom = viewContainer.zoom;
    }
  }

  onMount(() => {
    viewContainer.viewOnReady().then(() => {
      // it's now safe to do stuff with the viewContainer and MapView
      mapState.ready = true;
      mapState.view = viewContainer.view;
    });

    viewContainer.addEventListener("arcgisViewChange", onarcgisViewChange);

    return () => {
      viewContainer.removeEventListener("arcgisViewChange", onarcgisViewChange);
    };
  });
</script>

<arcgis-map bind:this={viewContainer} item-id={itemId} {center} {zoom}>
  <arcgis-zoom position="top-left"></arcgis-zoom>
  <arcgis-search position="top-right"></arcgis-search>
</arcgis-map>
