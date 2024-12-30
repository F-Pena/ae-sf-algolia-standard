import algoliasearch from "algoliasearch";
import { 
    ALGOLIA_APP_ID, 
    ALGOLIA_API_KEY
} from "./constants";

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);