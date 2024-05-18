import algoliasearch from "algoliasearch";
import { 
    ALGOLIA_APP_ID, 
    ALGOLIA_API_KEY, 
    ALGOLIA_INDEX_NAME
} from "./constants";

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const retreivedSettings = searchClient.initIndex(ALGOLIA_INDEX_NAME).getSettings();

const searchSettings = {
    hitsPerPage: [],
    attributesForFaceting: [],
    maxFacetHits: 10,
    maxValuesPerFacet: 100,
    sortFacetValuesBy: "count",
    highlightPreTag: "<em>",
    highlightPostTag: "</em>",
};