import queryString from "query-string";
import type { UrlQueryParams } from "../types";

const queryStringOptions: queryString.ParseOptions = {
  arrayFormat: "comma",
  parseBooleans: true,
  parseNumbers: true,
  types: {
    center: "number[]",
    itemid: "string",
  },
};

export function parseUrlQueryParams(): UrlQueryParams {
  const parsed = queryString.parse(window.location.search, queryStringOptions);
  return parsed;
}
