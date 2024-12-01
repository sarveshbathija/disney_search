import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value (e.g., user input) to avoid unnecessary updates or API calls.
 * - Useful when you want to delay actions based on user input or other frequently changing values.
 * - It prevents immediate changes and waits for a specified delay before setting the final value.
 *
 * @param {string | null} text - The value to debounce (usually user input).
 * @param {number} delay - The delay (in milliseconds) after which the value will be updated.
 *
 * @returns {string | null} The debounced value after the specified delay, or null if the value is null.
 */

const useDebounce = (text: string | null, delay: number): string | null => {
    const [debounce, setDebounce] = useState<string | null>(text);
    useEffect(() => {
        const timer = setTimeout(
            () => {
                setDebounce(text);
            },
            text === "" ? 0 : delay
        );
        return () => {
            clearTimeout(timer);
        };
    }, [text, delay]);
    return debounce;
};
export default useDebounce;
