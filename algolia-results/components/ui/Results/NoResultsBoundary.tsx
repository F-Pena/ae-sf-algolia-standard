import { useInstantSearch } from "react-instantsearch";
import { ReactNode } from "react";
// https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react/#handling-no-results

interface NoResultsBoundaryProps {
  children: ReactNode; // Define the type for children
}

const NoResultsBoundary: React.FC<NoResultsBoundaryProps> = ({ children }) => {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <div className="algolia-no-results">
        <h2 className="algolia-no-results__title">No results</h2>
        <p className="algolia-no-results__summary">
          No matches were found for <b>{results.query}</b>
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default NoResultsBoundary;
