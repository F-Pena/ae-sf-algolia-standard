import algoliasearch from "algoliasearch";
import { 
    ALGOLIA_APP_ID, 
    ALGOLIA_API_KEY, 
    ALGOLIA_INDEX_NAME
} from "./constants";

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export const searchSettings = searchClient.initIndex(ALGOLIA_INDEX_NAME).getSettings();