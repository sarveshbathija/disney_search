import { useNavigate } from "react-router-dom";

const ProfileIcon = () => {
    const navigate = useNavigate();
    const handleProfileIconClick = () => {
        navigate(`/profile`);
    };

    return (
        <button
            className="rounded-3xl bg-disney-blue p-3.5 cursor-pointer"
            onClick={handleProfileIconClick}
            aria-label="Go to profile"
        >
            <svg
                className=" text-gray-800 dark:text-white"
                width="20"
                height="20"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 18C3.33579 15.5226 6.50702 14 10 14C13.493 14 16.6642 15.5226 19 18M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z"
                    stroke="#C2CCDA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default ProfileIcon;
