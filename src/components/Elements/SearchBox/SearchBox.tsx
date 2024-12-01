import useFilter from "@/hooks/useFilter";
import ClearIcon from "../ClearIcon/ClearIcon";

const SearchBox = () => {
    const { searchInput, setSearchInput } = useFilter("name");
    return (
        <div className="flex-1 mx-8 relative">
            <input
                type="text"
                value={searchInput as string}
                className="p-4 bg-light-blue w-full rounded-2xl"
                placeholder="Find a character..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(e.target.value);
                }}
            />
            {searchInput && (
                <ClearIcon onClick={() => setSearchInput("")}></ClearIcon>
            )}
        </div>
    );
};

export default SearchBox;
