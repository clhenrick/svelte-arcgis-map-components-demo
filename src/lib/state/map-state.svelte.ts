import type MapView from "@arcgis/core/views/MapView";

/** class that houses various arcgis-map component state */
class ArcGisMapState {
  /** reference to the arcgis-map component's MapView */
  view = $state.raw<MapView>();
  /** current map center */
  center = $state<[number, number]>();
  /** current map zoom level */
  zoom = $state<number>();
  /** is the MapView in a "ready" state */
  ready = $state(false);
}

/** svelte state that tracks arcgis-map component related properties  */
export const mapState = new ArcGisMapState();
