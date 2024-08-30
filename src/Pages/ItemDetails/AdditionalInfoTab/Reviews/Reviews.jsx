import { useQuery } from "react-query";
import ReviewFormPopup from "./ReviewFormPopup/ReviewFormPopup";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";


const Reviews = ({ itemData }) => {

    const axiosPublic = useAxiosPublic()
    const itemId = itemData?._id
    // const itemName = itemData?.name
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
            <div className=" pb-5">
                <ReviewFormPopup itemId={itemId} />
            </div>
            <div className=" space-y-4">
                {
                    reviews.map(review => (
                        <div key={review._id} className="mx-auto">
                            <div className="border-2 border-gray-300 p-6 min-h-[160px] h-auto w-96 lg:w-full text-gray-600 mx-auto flex gap-3">
                                <div className=" flex-shrink-0 h-16 w-16">
                                    <img className="w-16 h-16 object-cover" src="/user1.png" alt="" />
                                </div>
                                <div className="space-y-3 w-full">
                                    <div className="space-y-1">
                                        <h3 className="text-gray-600 text-sm">
                                            {review.name},
                                            <span className="text-xs text-gray-400">
                                                {review.reviewDate}
                                            </span>
                                        </h3>
                                        <h3>
                                            <Rating style={{ maxWidth: 60 }} value={review.rating} readOnly />
                                        </h3>
                                    </div>
                                    <p className="break-words overflow-hidden text-ellipsis  ">
                                        {review.reviewText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Reviews;