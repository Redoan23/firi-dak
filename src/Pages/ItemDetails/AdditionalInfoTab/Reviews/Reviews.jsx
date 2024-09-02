import { useQuery } from "react-query";
import ReviewFormPopup from "./ReviewFormPopup/ReviewFormPopup";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import useUserData from "../../../../Hooks/useUserData/useUserData";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import { toast, Toaster } from "sonner";


const Reviews = ({ itemData }) => {

    const axiosPublic = useAxiosPublic()
    const itemId = itemData?._id
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/review/${itemId}`)
            return res.data
        }
    })

    const [userData] = useUserData()
    const userRole = userData?.role

    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/deletePostedReview/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The review has been deleted.",
                                icon: "success"
                            });
                            
                            refetch()
                        }
                    })
                    .catch(err => {
                        toast.error(`${err.message}`)
                    })
            }
        });
    }

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
                                {
                                    userRole === 'admin' && <BiTrash onClick={() => handleDeleteReview(review._id)} />
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <Toaster richColors position="bottom-right" />
        </div >
    );
};

export default Reviews;