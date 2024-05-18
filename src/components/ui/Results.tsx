import { 
    Hits, 
    Highlight
} from "react-instantsearch"; 
import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';

type HitProps = {
    hit: AlgoliaHit<{
        Title: string;
        Summary: string;
        Description: string;
        ItemDefaultUrl: string;
    }>;
};

const hitTemplate = ({ hit }: HitProps) => {
    const hasLink = hit.ItemDefaultUrl && hit.ItemDefaultUrl !== "";
    const summary = hit.Summary || hit.Description;
    return (
        <div>
            <h2>
                {hasLink ? 
                    <a href={hit.ItemDefaultUrl}>
                        <Highlight hit={hit} attribute="Title"/>
                    </a> :
                    <Highlight hit={hit} attribute="Title"/>
                }
            </h2>
            {summary && 
                <p>{summary}</p>
            }
        </div>
    );
};

export function Results () {

    return (
        <Hits hitComponent={hitTemplate} />
    )
}