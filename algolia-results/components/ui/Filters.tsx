import Dropdown from "./Facets/Dropdown";

export const Filters = ({ filters }:any) => {

    return (
        <div className="filters">
            {filters.map((filter: any) => {
                const isSearchable = filter.startsWith("searchable(") && filter.endsWith(")");
                const attribute = isSearchable ? filter.match(/\(([^)]+)\)/)[1] : filter;
                const title = `${attribute.replace(/([A-Z])/g, ' $1').trim()}`;
                return (
                    <div key={attribute}>
                        <Dropdown title={title} attribute={attribute} isSearchable={isSearchable}/>
                    </div>
                );
            })}
        </div>
    );
};