const rootLevel = document.getElementById("algolia-search-results-root");

export const ALGOLIA_APP_ID: string = rootLevel?.getAttribute("data-app-id") || "";
export const ALGOLIA_API_KEY: string = rootLevel?.getAttribute("data-api-key") || "";
export const ALGOLIA_INDEX_NAME: string = rootLevel?.getAttribute("data-index-name") || "";
export const ALGOLIA_FILTER: string = rootLevel?.getAttribute("data-filter") || "";
export const RESULTS_RULE_CONTEXT: string = "results";