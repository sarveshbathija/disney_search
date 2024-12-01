import logo from "@/images/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    const handleImageClick = () => navigate("/");
    return (
        <div onClick={handleImageClick} className="cursor-pointer">
            <img src={logo} className="w-[96px] h-[40px] object-cover" />
        </div>
    );
};

export default Logo;
