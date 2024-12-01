import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import {
    fetchCharacterDetailsById,
    fetchCharactersByName,
} from "@/api/disneyApi";

const PAGESIZE = 8;

/**
 * Custom hook to fetch character data with pagination and optional search filter by name.
 * - Handles the search filter (name) from the URL query parameters.
 * - Manages the current page and total pages for pagination.
 * - Returns the character data, loading states, and pagination information.
 *
 * @returns {Object} The hook provides the following:
 */

const useCharacters = () => {
    const [searchParams] = useSearchParams();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const name = searchParams.get("name");

    const {
        data: characterData,
        isFetching,
        isLoading,
        isFetched,
        isSuccess,
        isError,
    } = useQuery({
        queryKey: ["characterData", page, name],
        queryFn: () => {
            return fetchCharactersByName(page, PAGESIZE, name).then((data) => {
                setTotalPages(data?.info.totalPages);
                return data.info.count === 1 ? [data.data] : data.data;
            });
        },

        enabled: !!page,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setPage(1);
    }, [name]);

    return {
        setPage,
        page,
        characterData,
        totalPages,
        isFetching,
        isLoading,
        isFetched,
        isSuccess,
        isError,
    };
};

export const useFetchCharactersByIds = (ids: number[]) => {
    return useQuery({
        queryKey: ["resources", ids],
        queryFn: () =>
            Promise.all(ids.map((id) => fetchCharacterDetailsById(id))).then(
                (data) => {
                    return data.length === 1 ? data[0] : data;
                }
            ),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    });
};

export default useCharacters;
