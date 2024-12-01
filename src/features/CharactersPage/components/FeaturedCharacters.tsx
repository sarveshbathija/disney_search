import CharacterCard from "./CharacterCard";
import { useFetchCharactersByIds } from "@/hooks/useCharacters";
import { CHARACTER_MAP } from "@/constants/characters";
import { Character } from "@/types/types";

const characters: (keyof typeof CHARACTER_MAP)[] = [
    "BELLE",
    "BEAST",
    "MICKEY_MOUSE",
    "DONALD_DUCK",
];

const FeaturedCharacters = () => {
    const { data, isSuccess, isError } = useFetchCharactersByIds(
        characters.map((character) => CHARACTER_MAP[character])
    );

    if (isError) {
        return "An error occurred";
    }

    if (isSuccess) {
        return (
            <div className="bg-disney-blue">
                <div className="text-center text-white text-4xl p-10">
                    Featured Characters!
                </div>

                <div className="px-20 pb-20 flex flex-wrap gap-4">
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
export default FeaturedCharacters;
