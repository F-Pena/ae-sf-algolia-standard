const rootLevel = document.getElementById("algolia-search-results-root");

export const ALGOLIA_APP_ID: any = rootLevel?.getAttribute("data-app-id");
export const ALGOLIA_API_KEY: any = rootLevel?.getAttribute("data-api-key");
export const ALGOLIA_INDEX_NAME: any =
  rootLevel?.getAttribute("data-index-name");
export const ALGOLIA_FILTER_PROJECTS: any =
    rootLevel?.getAttribute("data-filter");
export const RESULTS_RULE_CONTEXT: string = "results";
