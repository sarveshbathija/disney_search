import { ChangeEvent } from "react";
import { Pagination } from "@mui/material";

import useCharacters from "@/hooks/useCharacters";
import { Spinner } from "@/components/Elements";
import { Character } from "@/types/types";

import CharacterCard from "./CharacterCard";

const CharacterSearchResults = ({ searchString }: { searchString: string }) => {
    const { setPage, page, characterData, totalPages, isLoading, isError } =
        useCharacters();
    const handleChange = (_r: ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    if (isError) {
        return "An error has occurred";
    }

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className="bg-light-blue flex flex-col px-20 pb-20 pt-10">
            <div className="text-center text-4xl pb-10">
                Search Results - {searchString}
            </div>

            {!characterData.length && (
                <div className="text-2xl text-center p-10">
                    No Results Found
                </div>
            )}

            <div className="flex flex-wrap gap-4">
                {characterData?.map((character: Character, index: number) => (
                    <CharacterCard
                        character={character}
                        key={index}
                    ></CharacterCard>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pt-10 justify-center flex">
                    <Pagination
                        page={page}
                        count={totalPages}
                        color="primary"
                        onChange={handleChange}
                    />
                </div>
            )}
        </div>
    );
};

export default CharacterSearchResults;
