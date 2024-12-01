import { useSearchParams } from "react-router-dom";
import DefaultCharacters from "@/features/CharactersPage/components/DefaultCharacters";
import CharacterSearchResults from "@/features/CharactersPage/components/CharacterSearchResults";
import FeaturedCharacters from "@/features/CharactersPage/components/FeaturedCharacters";

const CharactersPage = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    return (
        <>
            {name ? (
                <CharacterSearchResults searchString={name} />
            ) : (
                <DefaultCharacters />
            )}

            <FeaturedCharacters />
        </>
    );
};

export default CharactersPage;
