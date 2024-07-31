import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";


const useAllUser = () => {

    const axiosPublic = useAxiosPublic()
    const { data: allUser = [], isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allUser')
            return res.data
        }
    })
    console.log(allUser)

    return [allUser, isLoading]
};

export default useAllUser;