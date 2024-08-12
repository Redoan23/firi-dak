import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";


const useAllUser = () => {

    const axiosPublic = useAxiosPublic()
    const { data: allUser = [], isLoading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allUser')
            return res.data
        }
    })

    return [allUser, isLoading, refetch]
};

export default useAllUser;