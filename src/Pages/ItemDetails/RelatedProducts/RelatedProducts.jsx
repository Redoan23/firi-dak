import { Link } from "react-router-dom";
import useBanglesData from "../../../Hooks/useBanglesData/useBanglesData";

const RelatedProducts = () => {

    const [bangles] = useBanglesData()

    const shuffledArray = (array) => {
        let shuffled = array.slice()
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const randomizedArray = shuffledArray(bangles)

    return (
        <div className=" flex gap-20 mx-auto w-[80%]">
            {
                randomizedArray.slice(0, 3).map(bangle =>

                    <div key={bangle._id}>
                        <div className="card card-compact w-72  bg-white rounded-none shadow-xl  hover:-translate-y-1 ease-in-out duration-300">
                            <div className=" overflow-hidden">
                                <img
                                    src={bangle.img}
                                    alt="bangle"
                                    className=" object-cover w-full h-52"
                                />

                            </div >
                            <div className="card-body">
                                <h2 className="card-title text-gray-700">{bangle.name}</h2>
                                <p className=" text-gray-500">{bangle.price} TK</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/itemDetails/${bangle._id}`}>
                                        <button className="btn w-32 rounded-none bg-orange-600 text-white border-none hover:bg-gray-100 hover:text-orange-600 ease-in-out duration-500">View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default RelatedProducts;