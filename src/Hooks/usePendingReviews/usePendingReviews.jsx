import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";


const usePendingReviews = () => {

    const axiosPublic = useAxiosPublic()

    const { data: pendingReviews = [], refetch } = useQuery({
        queryKey: ['pendingReviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/pendingReviews')
            return res.data
        }
    })

    return [pendingReviews, refetch]
};

export default usePendingReviews;