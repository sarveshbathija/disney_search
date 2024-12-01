import logo from "@/images/logo.png";
const Footer = () => (
    <div className="flex flex-col align-center items-center mt-8">
        <div className="mb-4">
            <img src={logo} className="w-[96px] h-[40px] object-cover" />
        </div>
        <div className="text-11 mb-8">
            For educational use only. All characters and content are the
            property of Disney. This test is for private use and development
            testing only and should not be distributed for public consumption
        </div>
    </div>
);

export default Footer;
