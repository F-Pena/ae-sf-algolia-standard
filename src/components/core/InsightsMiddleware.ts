import { createInsightsMiddleware } from "instantsearch.js/es/middlewares";
import { useInstantSearch } from "react-instantsearch";
import { useLayoutEffect } from "react";

export function InsightsMiddleware() {
  const { addMiddlewares } = useInstantSearch();

  useLayoutEffect(() => {
    const middleware = createInsightsMiddleware({
      insightsClient: window.aa,
    });

    return addMiddlewares(middleware);
  }, [addMiddlewares]);

  return null;
}
