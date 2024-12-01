import CharacterCard from "./CharacterCard";
import { useFetchCharactersByIds } from "@/hooks/useCharacters";
import { Spinner } from "@/components/Elements";
import { CHARACTER_MAP } from "@/constants/characters";
import { Character } from "@/types/types";

const characters: (keyof typeof CHARACTER_MAP)[] = [
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
    const { data, isLoading, isSuccess, isError } = useFetchCharactersByIds(
        characters.map((character) => CHARACTER_MAP[character])
    );

    if (isError) {
        return "An error has occurred";
    }

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    if (isSuccess) {
        return (
            <div className="bg-light-blue ">
                <div className="p-20 flex flex-wrap gap-4">
                    {data?.map((character: Character, index: number) => (
                        <CharacterCard
                            character={character}
                            key={index}
                        ></CharacterCard>
                    ))}
                </div>
            </div>
        );
    }
};
export default DefaultCharacters;
