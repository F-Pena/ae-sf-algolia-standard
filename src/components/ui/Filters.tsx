import { useState, useEffect} from "react";
import { searchSettings } from "../../utils/algoliaSearchClient";
import Dropdown from "./Facets/Dropdown";

export const Filters = () => {
    const [filters, setFilters] = useState<any>();

    useEffect(() => {
        searchSettings.then((settings) => {
            setFilters(settings.attributesForFaceting);
        });
    }, []);

    return (
        <div>
            <h2>Filters</h2>
            {filters && 
                <ul>
                    {filters.map((filter: any) => {
                        const isSearchable = filter.startsWith("searchable(") && filter.endsWith(")");
                        const attribute = isSearchable ? filter.match(/\(([^)]+)\)/)[1] : filter;
                        return (
                            <li key={attribute}>
                                <Dropdown title={attribute} attribute={attribute} isSearchable={isSearchable}/>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};