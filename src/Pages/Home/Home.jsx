import BanglesCards from "./BanglesCards/BanglesCards";
import BannerSlider from "./BannerSlider/BannerSlider";

const Home = () => {
    return (
        <div className=" mt-16 ">
            <div>
                <BannerSlider />
            </div>
            <div>
                <BanglesCards />
            </div>
        </div>
    );
};

export default Home;