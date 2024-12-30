import { useState, useEffect } from "react";
import { 
    searchClient,
} from "./utils/search-client";
import searchRouting from "./utils/routing";
import { ALGOLIA_FILTER, ALGOLIA_INDEX_NAME } from "./utils/constants";
import { 
    InstantSearch, 
    Configure, 
    Pagination,
    SearchBox
} from "react-instantsearch"; 
import { Results } from "./components/ui/Results/ResultsList";
import { Filters } from "./components/ui/Filters";
import { AlgoliaStats } from "./components/ui/Stats";
import "./algolia-results.scss";

const App = () => {
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
