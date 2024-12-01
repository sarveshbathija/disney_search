import { formatDateWithOrdinal, getDiffInYears } from "@/utils/utils";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const ReadProfile = () => {
    const { setEditMode, profile, favoriteList } = useContext(UserContext);

    return (
        <div className="p-20 bg-light-blue">
            <div className="text-4xl mb-2">
                {profile.firstName} {profile.lastName}
            </div>
            <div className="text-sm mb-8">
                Last updated:{" "}
                {profile.lastUpdate
                    ? formatDateWithOrdinal(profile.lastUpdate)
                    : "N/A"}
            </div>
            <div className="text-lg font-bold mb-4">
                Age: {getDiffInYears(profile.birthDate)}
            </div>
            {(profile.city || profile.state) && (
                <div className="text-lg font-bold mb-4">
                    Location:{" "}
                    {[profile.city, profile.state].filter(Boolean).join(", ")}
                </div>
            )}
            {favoriteList.map((favorite) =>
                profile.favorites[favorite] ? (
                    <div className="text-lg font-bold mb-4" key={favorite}>
                        Favorite Disney{" "}
                        <span className="capitalize">{favorite}</span>:{" "}
                        {profile.favorites[favorite]}
                    </div>
                ) : null
            )}
            <button
                onClick={() => setEditMode(true)}
                className="rounded-md bg-disney-blue text-white px-6 py-3 mt-4"
            >
                Edit Profile
            </button>
        </div>
    );
};

export default ReadProfile;
