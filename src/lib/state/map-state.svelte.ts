import type MapView from "@arcgis/core/views/MapView"

export type MapState = {
  /** reference to the arcgis-map component's MapView */
  view: MapView | undefined;
  /** current map center */
  center: [number, number] | undefined;
  /** current map zoom level */
  zoom: number | undefined;
  /** is the MapView in a "ready" state */
  ready: boolean;
}

class MapSvelteState {
  view = $state.raw<MapView>();
  center = $state<[number, number]>();
  zoom = $state<number>();
  ready = $state(false);
}

/** svelte state that tracks arcgis-map component related properties  */
export const mapState = new MapSvelteState();
