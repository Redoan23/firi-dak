
import { Link } from "react-router-dom";



const MobileSearchResult = ({ searchData }) => {



    return (
        <div className=" space-y-2 mt-3">
                {
                    searchData?.map(data =>
                        <div key={data._id} className=" border px-1 flex items-center gap-3 ">
                            <div className=" py-1">
                                <img className=" w-6 h-6" src={data.img} alt="" />
                            </div>
                            <div>
                                <Link to={`/itemDetails/${data._id}`}>
                                    <h3 className=" text-sm text-gray-500 hover:text-orange-600 underline">
                                        {data.name.length > 23 ? `${data.name.slice(0, 20)}...` : data.name}
                                    </h3>
                                </Link>
                                {
                                    data.discountedPrice ?
                                        <div className=" flex items-center gap-2">
                                            <h3 className=" line-through text-xs">{data.price}</h3>
                                            <h3 className=" text-orange-600 text-xs">{data.discountedPrice}</h3>
                                        </div>
                                        :
                                        <div className=" text-xs text-orange-600">{data.price}</div>
                                }
                            </div>
                        </div>
                    )
                }
        </div>
    );
};

export default MobileSearchResult;