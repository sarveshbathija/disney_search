import { useEffect, useState } from "react";
import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
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

export const useFetchCharactersByIds = (
    ids: number[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): UseQueryResult<any, Error>[] => {
    return useQueries({
        queries: ids.map((id) => ({
            queryKey: ["character", id], // Unique query key for each character
            queryFn: () => fetchCharacterDetailsById(id),
        })),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as UseQueryResult<any, Error>[];
};

export default useCharacters;
