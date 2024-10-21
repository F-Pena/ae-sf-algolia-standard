import { useState, useEffect } from "react";
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
import { Filters } from "./components/ui/Filters";
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
        >
            <Configure 
                hitsPerPage={hitsPerPage}
                filters={ALGOLIA_FILTER}
            />
            <div className="layout">
                <Filters filters={filters}/>
                <div className="results-col">
                    <SearchBox placeholder="Search..."/>
                    <Results/>
                    <Pagination/>
                </div>
            </div>
        </InstantSearch>
    );
};

export default App;
