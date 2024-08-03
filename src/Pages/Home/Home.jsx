import { Toaster } from "sonner";
import Accordian from "./Accordian/Accordian";
import BanglesCards from "./BanglesCards/BanglesCards";
import BannerSlider from "./BannerSlider/BannerSlider";
import BraceletCards from "./BraceletCards/BraceletCards";

const Home = () => {
    return (
        <div className=" mt-16 mx-auto">
            <div>
                <BannerSlider />
            </div>
            <div className=" mx-auto text-center">
                <BanglesCards />
            </div>
            <div className=" mx-auto">
                <BraceletCards />
            </div>
            <div>
                <Accordian />
            </div>
            {/*below the div is for toaster not any section of home page */}
            <div>
                <Toaster position="bottom-right" closeButton={true} />
            </div>
        </div>
    );
};

export default Home;