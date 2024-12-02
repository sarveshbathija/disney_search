import CharacterCard from "./CharacterCard";
import { useFetchCharactersByIds } from "@/hooks/useCharacters";
import { CHARACTER_MAP } from "@/constants/characters";
import { Character } from "@/types/types";
import { UseQueryResult } from "@tanstack/react-query";

const charactersa: (keyof typeof CHARACTER_MAP)[] = [
    "BELLE",
    "BEAST",
    "MICKEY_MOUSE",
    "DONALD_DUCK",
];

const FeaturedCharacters = () => {
    const characterQueries = useFetchCharactersByIds(
        charactersa.map((character) => CHARACTER_MAP[character])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as UseQueryResult<any, Error>[]; // Assert the type here

    if (characterQueries.some((query) => query.isLoading)) {
        return <div>Loading...</div>;
    }

    // Check if any queries encountered an error
    if (characterQueries.some((query) => query.isError)) {
        return <div>Error loading characters.</div>;
    }

    // Extract data from each query
    const characters = characterQueries.map((query) => query.data);

    // if (isError) {
    //     return "An error occurred";
    // }

    // if (isSuccess) {
    return (
        <div className="bg-disney-blue">
            <div className="text-center text-white text-4xl p-10">
                Featured Characters!
            </div>

            <div className="px-20 pb-20 flex flex-wrap gap-4">
                {characters?.map((character: Character, index: number) => (
                    <CharacterCard
                        character={character}
                        key={index}
                    ></CharacterCard>
                ))}
            </div>
        </div>
    );
};
export default FeaturedCharacters;
