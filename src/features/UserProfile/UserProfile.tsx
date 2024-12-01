import { useContext } from "react";
import ReadProfile from "./components/ReadProfile";
import EditProfile from "./components/EditProfile";
import { UserContext } from "./providers/UserProvider";

const UserProfile = () => {
    const { editMode, profile } = useContext(UserContext);

    if (editMode || !profile) {
        return <EditProfile />;
    }
    return <ReadProfile />;
};

export default UserProfile;
