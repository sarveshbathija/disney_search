import { useState } from "react";
import Cookies from "js-cookie";

/**
 * Custom hook for managing a specific cookie's value in state.
 * - Reads the value from cookies and syncs it with the component state.
 * - Provides functions to set, get, and remove the cookie's value.
 *
 * @param {string} key - The name of the cookie to interact with.
 * @param {T} [defaultValue] - An optional default value for the cookie if it doesn't exist.
 * @returns {Object} The hook provides the following:
 *   - `value`: The current value of the cookie (or the default value if the cookie doesn't exist).
 *   - `setValue`: Function to set the value of the cookie and update the component state.
 *   - `removeValue`: Function to remove the cookie and reset the state.
 */

const useCookie = <T extends object | string | null>(
    key: string,
    defaultValue?: T
) => {
    const [value, setValueState] = useState(() => {
        const cookie = Cookies.get(key);
        return cookie ? (JSON.parse(cookie) as T) : defaultValue ?? null;
    });

    const setValue = (newValue: T, options?: Cookies.CookieAttributes) => {
        Cookies.set(key, JSON.stringify(newValue), options);
        setValueState(newValue);
    };

    const removeValue = (options?: Cookies.CookieAttributes) => {
        Cookies.remove(key, options);
        setValueState(defaultValue ?? null);
    };

    return {
        value,
        setValue,
        removeValue,
    };
};

export default useCookie;
