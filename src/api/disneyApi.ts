import axios from "axios";

const API_URL = "https://api.disneyapi.dev";

export const fetchCharacterDetailsById = (characterId: number) => {
    return axios
        .get(`${API_URL}/character/${characterId}`)
        .then((response) => response.data.data)
        .catch((error) => {
            console.error("Error fetching character details:", error);
            throw new Error("Failed to fetch character details.");
        });
};

export const fetchCharactersByName = (
    page: number,
    pageSize: number,
    name?: string | null
) => {
    return axios
        .get(`${API_URL}/character`, {
            params: { page, pageSize, name },
        })
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error fetching character search:", error);
            throw new Error("Failed to fetch character search.");
        });
};
