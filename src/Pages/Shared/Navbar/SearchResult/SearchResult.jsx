import { Link } from "react-router-dom";


const SearchResult = ({ ItemData }) => {
    return (
        <div>
            {
                ItemData.length > 0 ?
                    < div className=" shadow-xl overflow-auto w-full h-auto max-h-80 border-gray-300 border ">
                        {
                            ItemData.map(item =>
                                <div key={item._id} className=" bg-white px-2 border ">
                                    <Link to={`/itemDetails/${item._id}`} className=" py-2">
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>
                                    </Link >
                                </div>
                            )
                        }
                    </div>
                    :
                    <div className=" w-full bg-white shadow-lg border h-6 text-center">
                        No items found
                    </div>
            }
        </div>

    );
};

export default SearchResult;