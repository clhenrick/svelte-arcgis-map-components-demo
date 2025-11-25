<script lang="ts">
  import "@arcgis/map-components/components/arcgis-map";
  import "@arcgis/map-components/components/arcgis-zoom";
  import "@arcgis/map-components/components/arcgis-search";
  import "@arcgis/map-components/components/arcgis-home";
  import { onMount } from "svelte";
  import { mapState } from "../../state";
  import { isValidNumber } from "../../utils";

  /** props for setting the initial arcgis-map properties from an ArcGIS Online PortalItem id. */
  type PropsPortalItem = {
    itemid: string;
  };

  /** props for setting the initial arcgis-map properties with center, zoom, basemap, etc. */
  type PropsManual = {
    center: [number, number];
    zoom: number;
    basemap: string;
  };

  /** ArcGisMap props are either for a PortalItem or manual setup */
  type Props = PropsPortalItem | PropsManual;

  const props: Props = $props();

  /** type guard to infer that props are for manual setup */
  const isManual = (p: Props): p is PropsManual =>
    "center" in p && "zoom" in p && "basemap" in p;

  /** type guard to infer that props are for PortalItem setup */
  const isPortalItem = (p: Props): p is PropsPortalItem => "itemid" in p;

  /** reference to the arcgis-map element which exposes properties such as view, center, zoom, etc.
   * see: https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/
   */
  let viewContainer: HTMLArcgisMapElement;

  /** event handler for view related changes such as zoom, scale, center, rotation, extent, camera, viewpoint */
  function onArcgisViewChange() {
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
    // handle setting up the arcgis-map from a PortalItem
    if (isPortalItem(props)) {
      viewContainer.itemId = props.itemid;
    }

    // handle setting up the arcgis-map manually
    if (isManual(props)) {
      const { center, zoom, basemap } = props;
      viewContainer.center = center;
      viewContainer.zoom = zoom;
      viewContainer.basemap = basemap;
    }

    viewContainer.viewOnReady().then(() => {
      // it's now safe to do stuff with the viewContainer / MapView
      mapState.ready = true;
      mapState.view = viewContainer.view;
    });

    viewContainer.addEventListener("arcgisViewChange", onArcgisViewChange);

    return () => {
      viewContainer.removeEventListener("arcgisViewChange", onArcgisViewChange);
    };
  });
</script>

<arcgis-map bind:this={viewContainer}>
  <arcgis-zoom slot="top-left"></arcgis-zoom>
  <arcgis-home slot="top-left"></arcgis-home>
  <arcgis-search slot="top-right"></arcgis-search>
</arcgis-map>
