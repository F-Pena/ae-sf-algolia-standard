import { useState, useEffect } from "react";
import { 
    searchClient,
    searchSettings
} from "./utils/search-client";
import searchRouting from "./utils/routing";
import { useQuery } from "./utils/utils";
import { ALGOLIA_FILTER, ALGOLIA_INDEX_NAME, ALGOLIA_APP_ID, ALGOLIA_API_KEY } from "./utils/constants";
import { 
    InstantSearch, 
    Configure, 
    Pagination,
    SearchBox
} from "react-instantsearch"; 
import { Results } from "./components/ui/Results/ResultsList";
import { Filters } from "./components/ui/Filters";
import { AlgoliaStats } from "./components/ui/Stats";
import aa from 'search-insights'; 
import "./index.css";

const App = () => {
    const query = useQuery();
    const [hitsPerPage, setHitsPerPage] = useState<number | undefined>(10);
    const [filters, setFilters] = useState<any>();

    useEffect(() => {
        searchSettings.then((settings) => {
            setHitsPerPage(settings.hitsPerPage);
            setFilters(settings.attributesForFaceting);
        });
    }, []);
    
    return (
        <InstantSearch
            indexName={ALGOLIA_INDEX_NAME} 
            searchClient={searchClient}
            insights={true} 
            initialUiState={{ [ALGOLIA_INDEX_NAME]: { query, page:1, } }}
            routing={searchRouting} 
            future={{
                preserveSharedStateOnUnmount: true
            }}
        >
            <Configure 
                hitsPerPage={hitsPerPage}
                filters={ALGOLIA_FILTER} 
                clickAnalytics={true}
            />
            <div className="layout">
                <Filters filters={filters}/>
                <div className="results-col">
                    <SearchBox placeholder="Search..."/>
                    <AlgoliaStats/>
                    <Results/>
                    <Pagination/>
                </div>
            </div>
        </InstantSearch>
    );
};

export default App;
