import { history } from "instantsearch.js/es/lib/routers";
import { ALGOLIA_INDEX_NAME } from "./constants";

const router = history({
    createURL({ qsModule, routeState, location }) {
        const baseUrl = window.location.href.split("?")[0];
        const queryParameters = {};

        if (routeState.query) {
            queryParameters.query = routeState.query;
        }

        if (routeState.page != 1) {
            queryParameters.page = routeState.page;
        }

        const queryString = qsModule.stringify(queryParameters, {
            addQueryPrefix: true,
            encode: false,
            arrayFormat: "comma",
        });
        const queryPage = "search";
        return `${baseUrl}${queryString}`;
    },

    parseURL({ qsModule, location }: any) {
        const {
            query = "",
            page,
        } = qsModule.parse(location.search.slice(1));

        return {
            query: decodeURIComponent(query),
            page,
        };
    },
    cleanUrlOnDispose: false
});

const stateMapping = {
    stateToRoute(uiState: any) {
        // refer to uiState docs for details: https://www.algolia.com/doc/api-reference/widgets/ui-state/js/
        return {
            query: uiState[ALGOLIA_INDEX_NAME].query,
            page: uiState[ALGOLIA_INDEX_NAME].page,
        };
    },

    routeToState(routeState: any) {
        return {
            [ALGOLIA_INDEX_NAME]: {
                query: routeState.query,
                page: routeState.page,
            },
        };
    },
};

const searchRouting = {
    router,
    stateMapping,
};

export default searchRouting;
