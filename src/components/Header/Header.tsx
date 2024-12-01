import Logo from "../Elements/Logo/Logo";
import SearchBox from "../Elements/SearchBox/SearchBox";
import ProfileIcon from "../Elements/ProfileIcon/ProfileIcon";

const Header = () => {
    return (
        <div className="flex items-center my-8">
            <Logo />
            <SearchBox />
            <ProfileIcon />
        </div>
    );
};
export default Header;
