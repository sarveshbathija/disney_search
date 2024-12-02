import CharacterCard from "./CharacterCard";
import { useFetchCharactersByIds } from "@/hooks/useCharacters";
import { Spinner } from "@/components/Elements";
import { CHARACTER_MAP } from "@/constants/characters";
import { Character } from "@/types/types";
import { UseQueryResult } from "@tanstack/react-query";

const charactersa: (keyof typeof CHARACTER_MAP)[] = [
    "JAFAR",
    "JASMINE",
    "ALADDIN",
    "ABU",
    "ELSA",
    "ANNA",
    "KRISTOFF",
    "OLAF",
];

const DefaultCharacters = () => {
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

    return (
        <div className="bg-light-blue ">
            <div className="p-20 flex flex-wrap gap-4">
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
export default DefaultCharacters;
