import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";


const useItemDetails = (id) => {

    const axiosPublic = useAxiosPublic()

    const { data: itemDetails = [], isLoading } = useQuery({
        queryKey: [`itemDetails${id}`],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bangles/itemDetails/${id}`)
            return res.data
        }
    })

    return [itemDetails, isLoading]
};

export default useItemDetails;