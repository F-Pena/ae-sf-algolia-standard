// import { ALGOLIA_INDEX_NAME, RESULTS_RULE_CONTEXT } from "./utils/constants";
// import { searchClient } from "./utils/algoliaSearchClient";
import searchRouting from "./utils/searchRouting";
import { useQuery } from "./utils/utils";
import { InstantSearch, Configure, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";

const SEARCH_EVENT = "Searchbox Event";

const rootLevel = document.getElementById("root");
console.log("rootLevel", rootLevel);

export const ALGOLIA_APP_ID: any = rootLevel?.getAttribute("data-app-id");
export const ALGOLIA_API_KEY: any = rootLevel?.getAttribute("data-api-key");
export const ALGOLIA_INDEX_NAME: any = rootLevel?.getAttribute("data-index-name");

console.log("ALGOLIA_APP_ID", ALGOLIA_APP_ID);
console.log("ALGOLIA_API_KEY", ALGOLIA_API_KEY);
console.log("ALGOLIA_INDEX_NAME", ALGOLIA_INDEX_NAME);

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const App = () => {
    const query = useQuery();
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={ALGOLIA_INDEX_NAME}
            insights={true}
        >
            <Configure
                clickAnalytics={true}
                hitsPerPage={20}
            />
            <h1>Algolia</h1>
            <Hits/>
        </InstantSearch>
    );
};

export default App;
