import { useQuery } from "react-query";
import ReviewFormPopup from "./ReviewFormPopup/ReviewFormPopup";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";


const Reviews = ({ itemData }) => {

    const axiosPublic = useAxiosPublic()
    const itemId = itemData?._id
    const { data: reviews = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/review/${itemId}`)
            return res.data
        }
    })

    console.log(reviews)

    return (
        <div>
            <div>
                <ReviewFormPopup itemId={itemId} />
            </div>
            <div className=" mx-auto">
                {
                    reviews.map(review =>
                        <div key={review._id} className=" mx-auto">
                            <div className=" border-2 p-4 h-fit w-72 lg:w-[500px] space-y-4 text-gray-600 mx-auto">
                                <div className=" space-y-1">
                                    <h3 className=" text-gray-600">{review.name}, <span className=" text-xs text-gray-400">{review.reviewDate}</span> </h3>
                                    <h3>
                                        <Rating style={{ maxWidth: 80 }} value={review.rating} readOnly />
                                    </h3>
                                </div>
                                <div>
                                    <p>
                                        {review.reviewText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;