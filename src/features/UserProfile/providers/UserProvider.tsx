import { createContext, ReactNode, useState } from "react";
import { DisneyFavorites, UserProfile } from "../types/types";
import useCookie from "@/hooks/useCookie";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormFields, profileSchema } from "../schemas/profileSchema";
import { formatDate } from "@/utils/utils";

interface UserProfileProps {
    profile: UserProfile;
    editMode: boolean;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    formValues: UseFormReturn<UserProfile>;
    onSubmit: SubmitHandler<ProfileFormFields>;
    favoriteList: (keyof DisneyFavorites)[];
}

const UserContext = createContext<UserProfileProps>({} as UserProfileProps);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const userProfileCookie = useCookie("userProfile");
    const profile = userProfileCookie.value as UserProfile;
    const [editMode, setEditMode] = useState<boolean>(false);

    const setProfile = userProfileCookie.setValue;

    const formValues = useForm<ProfileFormFields>({
        defaultValues: {
            firstName: profile?.firstName || "",
            lastName: profile?.lastName || "",
            birthDate: profile?.birthDate
                ? formatDate(new Date(profile?.birthDate))
                : "",
            city: profile?.city || "",
            state: profile?.state || "",
            favorites: {
                ride: profile?.favorites.ride || "",
                character: profile?.favorites?.character || "",
                movie: profile?.favorites.movie || "",
                park: Array.isArray(profile?.favorites?.park)
                    ? profile?.favorites?.park[0] || ""
                    : profile?.favorites?.park || "",
            },
        },
        resolver: zodResolver(profileSchema),
    });

    const onSubmit: SubmitHandler<ProfileFormFields> = (data) => {
        try {
            data = {
                ...data,
                birthDate: new Date(data.birthDate).toDateString(),
                lastUpdate: new Date().toDateString(),
            };
            setProfile(data);
            setEditMode(false);
        } catch {
            formValues.setError("root", {
                message: "Form Error",
            });
        }
    };

    const favoriteList: (keyof DisneyFavorites)[] = [
        "character",
        "movie",
        "ride",
        "park",
    ];

    const values = {
        profile,
        formValues,
        editMode,
        setEditMode,
        onSubmit,
        favoriteList,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

export { UserContext, UserProvider };
