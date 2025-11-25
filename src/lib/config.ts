import type { UrlQueryParams } from "./types";

/** default ArcGIS Online PortalItem id for the arcgis-map component to load */
export const defaultItemId = "02b37471d5d84cacbebcccd785460e94";

export const defaultCenter = [-122.27, 37.8] as [number, number];

export const defaultZoom = 8;

export const defaultBasemap = "dark-gray";

const defaultConfig: Required<UrlQueryParams> = {
  itemid: defaultItemId,
  center: defaultCenter,
  zoom: defaultZoom,
  basemap: defaultBasemap,
};

/** allows for overriding default configuration values from URL query params */
export function resolveConfig(
  params: UrlQueryParams,
): Required<UrlQueryParams> {
  return {
    ...defaultConfig,
    ...params,
  };
}
