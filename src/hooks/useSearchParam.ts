import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * A custom hook that syncs state with a URL search parameter.
 * Supports string, number, boolean, and object values.
 * @param key The search parameter key to sync with.
 * @param defaultValue The default value for the state.
 * @returns A stateful value, and a function to update it.
 */

function useParamState(
    key: string,
    defaultValue: string | null
): [string | null, (newValue: string | null) => void] {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramValue = searchParams.get(key);

    const [state, setState] = useState<string | null>(() => {
        if (paramValue === null) {
            return defaultValue;
        }
        try {
            return JSON.parse(paramValue);
        } catch {
            return paramValue;
        }
    });

    const setParamState = useCallback(
        (newValue: string | null) => {
            const updatedValue = newValue;

            const newSearchParams = new URLSearchParams(searchParams);

            if (!updatedValue) {
                newSearchParams.delete(key);
                setSearchParams(newSearchParams);
            } else {
                setState(updatedValue);
                newSearchParams.set(key, updatedValue);
                setSearchParams(newSearchParams);
            }
        },
        [key, searchParams, setSearchParams]
    );

    return [state, setParamState];
}

export default useParamState;
