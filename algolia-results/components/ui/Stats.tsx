import { useStats } from 'react-instantsearch';

export const AlgoliaStats = () => {
  const { nbHits, query } = useStats();
  return (
    <div className="algolia-stats">
      {nbHits.toLocaleString()} results for <q className="algolia-stats__query">{query}</q>
    </div>
  );
}