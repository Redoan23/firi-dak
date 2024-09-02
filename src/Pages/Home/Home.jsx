import { Toaster } from "sonner";
import Accordian from "./Accordian/Accordian";
import BanglesCards from "./BanglesCards/BanglesCards";
import BannerSlider from "./BannerSlider/BannerSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {


    return (
        <div className=" mt-16 mx-auto">
            <Helmet>
                <title>
                    FIRIDAK - your trust is our identity
                </title>
            </Helmet>
            <div>
                <BannerSlider />
            </div>
            <div className=" mx-auto text-center">
                <BanglesCards />
            </div>

            <div>
                <Accordian />
            </div>

            {/*below the div is for toaster not any section of home page */}
            <div>
                <Toaster position="bottom-right" closeButton={true} richColors className=" z-[100]" />
            </div>
        </div>
    );
};

export default Home;