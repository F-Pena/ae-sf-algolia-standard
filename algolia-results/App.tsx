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
import "./algolia-results.scss";

const App = () => {
    const query = useQuery();
    const [hitsPerPage, setHitsPerPage] = useState<number | undefined>(10);

    useEffect(() => {
        searchSettings.then((settings) => {
            setHitsPerPage(settings.hitsPerPage);
        });
    }, []);
    
    return (
        <InstantSearch
            searchClient={searchClient} 
            indexName={ALGOLIA_INDEX_NAME} 
            insights={true} 
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
                <Filters />
                <div className="results-col">
                    <div className="algolia-results__controls">
                        <SearchBox placeholder="Search..."/>
                        <AlgoliaStats/>
                    </div>
                    <Results/>
                    <Pagination/>
                </div>
            </div>
        </InstantSearch>
    );
};

export default App;
