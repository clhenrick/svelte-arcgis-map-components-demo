/** expected possible URL query params that override the app's default configuration values */
export type UrlQueryParams = {
  /** the initial arcgis-map center property */
  center?: [number, number];
  /** the initial arcgis-map zoom property */
  zoom?: number;
  /** the initial arcgis-map basemap property */
  basemap?: string;
  /** the initial arcgis-map item-id/itemId property */
  itemid?: string;
};

/** resolved configuration values */
export type Configuration = Required<UrlQueryParams>;
