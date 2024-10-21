import algoliasearch from "algoliasearch";
import { autocomplete } from "@algolia/autocomplete-js";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";

const searchbox = document.getElementById("algolia-searchbox");
const suggestions = document.getElementById("algolia-searchbox-suggestions");
const apiKey = searchbox.getAttribute("data-api-key");
const appId = searchbox.getAttribute("data-app-id");
const indexName = searchbox.getAttribute("data-index-name");
const suggestionsIndexName = searchbox.getAttribute("data-suggestions-index-name");
const page = searchbox.getAttribute("data-page");

const searchClient = algoliasearch(appId, apiKey);

const handleSubmit = (event) => {
    const query = event.event.target.elements[1].value;
    window.location.href = `${page}?query=${query}`;
}

const urlQuery = new URLSearchParams(window.location.search).get("query");
const initialQuery = urlQuery ? urlQuery : "";

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: suggestionsIndexName,
    transformSource({ source }) {
        return {
            ...source,
            getItemUrl({ item }) {
                return `${page}?query=${item.query}`;
            },
            templates: {
                item(params) {
                    const { item, html } = params;
                    
                    return html `<a href="${page}?query=${item.query}">${item.query}</a>`;
                }
            }
        }
    }
});

autocomplete({
    container: searchbox,
    placeholder: "Search",
    panelContainer: suggestions,
    insights: true,
    enterKeyHint: "next",
    detachedMediaQuery: "(max-width: 0px)",
    initialState: {
        query: initialQuery
    },
    plugins: [querySuggestionsPlugin],
    onSubmit: handleSubmit,
    render({ elements, render, html }, root) {
        const { querySuggestionsPlugin } = elements;

        render(
            html `
                <div class="algolia-searchbox-suggestions__panel">
                    <div class="algolia-searchbox-suggestions__title">Suggestions</div>
                    ${querySuggestionsPlugin}
                </div>
            `,
            root
        )
    }
});