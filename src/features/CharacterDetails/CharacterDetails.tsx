import { useParams } from "react-router-dom";
import { Spinner } from "@/components/Elements";
import { useFetchCharactersByIds } from "@/hooks/useCharacters";
import { dateFormatter } from "@/utils/utils";

type CharacterMediaKeys = "films" | "tvShows" | "shortFilms";

interface MediaMappingItem {
    title: string;
    key: CharacterMediaKeys;
}

const mediaMapping: MediaMappingItem[] = [
    {
        title: "Featured Films",
        key: "films",
    },

    {
        title: "Short Films",
        key: "shortFilms",
    },
    {
        title: "TV Shows",
        key: "tvShows",
    },
];

const CharacterDetails = () => {
    const { id: characterId } = useParams<{ id: string }>();
    const parsedCharacterId = Number(characterId);

    const {
        data: characterDetails,
        isLoading,
        isSuccess,
        isError,
    } = useFetchCharactersByIds([parsedCharacterId]);

    const goToCharacterURL = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    if (isError) {
        return "Error loading character details";
    }

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    if (isSuccess && characterDetails) {
        return (
            <div className="p-16 bg-light-blue">
                <div className="flex">
                    <div className="p-2">
                        <img
                            src={characterDetails.imageUrl}
                            className="rounded-lg object-cover w-[439px] h-[529px]"
                        />
                    </div>
                    <div className="pl-8">
                        <div className="text-4xl mb-6">
                            {characterDetails.name}
                        </div>
                        <div className="mb-4">
                            Last Updated{" "}
                            {dateFormatter.format(
                                new Date(characterDetails.updatedAt as string)
                            )}
                        </div>
                        {mediaMapping.map(
                            (section: MediaMappingItem, index: number) => (
                                <ShowMediaList
                                    key={`${section.key}-${index}`}
                                    media={characterDetails[section.key]}
                                    category={section.title}
                                ></ShowMediaList>
                            )
                        )}
                        {characterDetails.sourceUrl && (
                            <button
                                className="rounded-md bg-disney-blue text-white px-6 py-3 mt-4"
                                onClick={() =>
                                    goToCharacterURL(characterDetails.sourceUrl)
                                }
                            >
                                Explore More Character Details
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

export default CharacterDetails;

const ShowMediaList = ({
    media,
    category,
}: {
    media: string[];
    category: string;
}) => {
    if (media.length) {
        return (
            <>
                <div className="text-lg font-bold">{category}</div>
                <ul className="text-base mb-4 pl-7">
                    {media.map((mediaTitle: string, idx: number) => (
                        <li className="list-disc" key={idx}>
                            {mediaTitle}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
};
