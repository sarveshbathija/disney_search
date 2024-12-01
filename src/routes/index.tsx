import { useRoutes } from "react-router-dom";
import CharacterDetails from "@/features/CharacterDetails/CharacterDetails";
import CharactersPage from "@/features/CharactersPage/CharactersPage";
import MainLayout from "@/components/Layouts/MainLayout";
import UserProfile from "@/features/UserProfile/UserProfile";

export const AppRoutes = () => {
    const routes = [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <CharactersPage /> },
                { path: "/character/:id", element: <CharacterDetails /> },
                {
                    path: "/profile",
                    element: <UserProfile />,
                },
            ],
        },
    ];

    const element = useRoutes([...routes]);

    return <>{element}</>;
};
