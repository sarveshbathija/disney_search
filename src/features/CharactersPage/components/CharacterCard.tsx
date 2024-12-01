import { Character } from "@/types/types";
import { scrollToTop } from "@/utils/utils";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }: { character: Character }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white flex flex-col character-card w-[248px] h-[416px] transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="h-[248px]">
                <img
                    src={character.imageUrl}
                    className="object-cover w-full h-full object-top"
                ></img>
            </div>
            <div className="flex flex-col align-middle text-center  justify-center flex-1 p-3">
                <div className="text-center text-lg">{character.name}</div>
                <div className="flex-1 mt-4 text-15">
                    <FeaturedInfo character={character}></FeaturedInfo>
                </div>

                <div
                    className="text-xs font-black underline mb-2 cursor-pointer uppercase"
                    onClick={() => {
                        navigate(`/character/${character._id}`);
                        scrollToTop();
                    }}
                >
                    View Profile
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;

const FeaturedInfo = ({ character }: { character: Character }) => {
    if (character.films.length) {
        return (
            <FeatureBlock media={character.films} title={"Featured Films"} />
        );
    } else if (character.tvShows.length) {
        return (
            <FeatureBlock
                media={character.tvShows}
                title={"Featured TV Shows"}
            />
        );
    } else if (character.shortFilms.length) {
        return (
            <FeatureBlock
                media={character.tvShows}
                title={"Featured Short Films"}
            />
        );
    }
};

const FeatureBlock = ({ media, title }: { media: string[]; title: string }) => (
    <>
        <div className="font-semibold">{title}</div>
        <div className="line-clamp-2">{media.join(", ")}</div>
    </>
);
