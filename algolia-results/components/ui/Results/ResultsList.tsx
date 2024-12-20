import { 
    Hits, 
    Highlight
} from "react-instantsearch"; 
import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';
import NoResultsBoundary from "./NoResultsBoundary";

type HitProps = {
    hit: AlgoliaHit<{
        Title: string;
        Summary?: string;
        Description?: string;
        ItemDefaultUrl?: string;
        ViewUrl?: string;
    }>;
};

const hitTemplate = ({ hit }: HitProps) => {
    const url = hit.ItemDefaultUrl || hit.ViewUrl;
    const summary = hit.Summary || hit.Description;
    return (
        <div>
            <h2>
                <a href={url}>
                    <Highlight hit={hit} attribute="Title"/>
                </a>
            </h2>
            {summary && 
                <p>{summary}</p>
            }
        </div>
    );
};

export function Results () {

    return (
        <NoResultsBoundary>
            <Hits hitComponent={hitTemplate} />
        </NoResultsBoundary>
    )
}