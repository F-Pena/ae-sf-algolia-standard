// import { ALGOLIA_INDEX_NAME, RESULTS_RULE_CONTEXT } from "./utils/constants";
import { 
    searchClient,
    searchSettings
} from "./utils/algoliaSearchClient";
import searchRouting from "./utils/searchRouting";
import { useQuery } from "./utils/utils";
import { ALGOLIA_FILTER, ALGOLIA_INDEX_NAME } from "./utils/constants";
import { 
    InstantSearch, 
    Configure, 
    Pagination,
    SearchBox
} from "react-instantsearch"; 
import { Results } from "./components/ui/Results";


const App = () => {
    const query = useQuery();
    return (
        <InstantSearch
            indexName={ALGOLIA_INDEX_NAME} 
            searchClient={searchClient}
            insights={true} 
            initialUiState={{ [ALGOLIA_INDEX_NAME]: { query, page:1, } }}
            routing={searchRouting}
        >
            <h1>Algolia</h1> 
            <Configure 
                hitsPerPage={10}
                filters={ALGOLIA_FILTER}
            />
            <SearchBox/>
            <Results/>
            <Pagination/>
        </InstantSearch>
    );
};

export default App;
