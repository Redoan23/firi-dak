import { Link } from "react-router-dom";


const SearchResult = ({ ItemData }) => {
    return (
        <div className=" shadow-xl w-full ">
            {
                ItemData.length > 0 && ItemData.map(item =>
                    <div key={item._id} className=" bg-white px-2 border">
                        <Link to={`/itemDetails/${item._id}`} >
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </Link >
                    </div>
                )
            }
        </div>
    );
};

export default SearchResult;