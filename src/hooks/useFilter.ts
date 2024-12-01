import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import useDebounce from "./useDebounce";
import { useEffect, useState } from "react";
import useParamState from "./useSearchParam";

/**
 * Custom hook that handles filtering behavior based on a query parameter.
 * - Synchronizes the search input state with the URL search parameters.
 * - Debounces the search input to prevent excessive re-renders or API calls.
 * - Resets the search input when the user navigates to a new location.
 *
 * @param {string} queryName - The name of the query parameter used for the search input in the URL.
 *
 * @returns {Object} The current search input and a function to update it.
 */

const useFilter = (queryName: string) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const queryNameParam = searchParams.get(queryName) || "";
    const [searchInput, setSearchInput] = useState<string | null>(
        queryNameParam
    );
    const debouncedSearchInput = useDebounce(searchInput, 1000);
    const [, setParamState] = useParamState(queryName, debouncedSearchInput);

    useEffect(() => {
        if (searchInput && !location.search) {
            setSearchInput("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        setParamState(debouncedSearchInput);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchInput]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        // If "name" exists in the query params and not on the "/" route
        if (searchParams.has(queryName) && location.pathname !== "/") {
            navigate({
                pathname: "/",
                search: location.search, // Use the existing search parameters
            });
        }
    }, [location, navigate, queryName]);

    return { searchInput, setSearchInput };
};
export default useFilter;
