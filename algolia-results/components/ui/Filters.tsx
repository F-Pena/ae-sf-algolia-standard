import Dropdown from "./Facets/Dropdown";
import { SortBy } from "instantsearch.js";
import type { SearchResults } from 'algoliasearch-helper';
export interface CustomFacet {
    title: string;
    attributeName: string;
    operator?: "and" | "or";
    searchable: boolean;
    searchablePlaceholder?: string;
    limit: number;
    showMore: boolean;
    showMoreLimit?: number;
    sortBy?: SortBy<SearchResults.FacetValue>;
    rootClassName?: string;
    classNames?: object;
}

const facets: CustomFacet[] = [
    {
      title: "Content Type",
      attributeName: "ContentType",
      operator: "or",
      searchable: true,
      limit: 20,
      showMore: false,
      rootClassName: "algolia-facet__desktop-no-toggle",
    },
    {
        title: "Date Created",
        attributeName: "DateCreated",
        operator: "or",
        searchable: false,
        limit: 20,
        showMore: false,
        rootClassName: "algolia-facet__desktop-no-toggle",
    },
];

export const Filters = () => {
    return (
        <div className="filters">
            {facets.map((facet: any) => {
                return (
                    <div key={facet.attributeName}>
                        <Dropdown 
                            title={facet.title} 
                            attribute={facet.attributeName} 
                            isSearchable={facet.searchable} 
                            limit={facet.limit}
                            showMore={facet.showMore}
                            rootClassName={facet.rootClassName}
                        />
                    </div>
                );
            })}
        </div>
    );
};