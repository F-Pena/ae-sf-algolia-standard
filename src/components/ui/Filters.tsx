import Dropdown from "./Facets/Dropdown";

export const Filters = ({ filters }:any) => {

    return (
        <div>
            <h2>Filters</h2>
            {filters && 
                <ul>
                    {filters.map((filter: any) => {
                        const isSearchable = filter.startsWith("searchable(") && filter.endsWith(")");
                        const attribute = isSearchable ? filter.match(/\(([^)]+)\)/)[1] : filter;
                        const title = `${attribute.replace(/([A-Z])/g, ' $1').trim()}`;
                        return (
                            <li key={attribute}>
                                <Dropdown title={title} attribute={attribute} isSearchable={isSearchable}/>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};