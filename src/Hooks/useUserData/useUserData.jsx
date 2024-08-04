import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../useAuth/useAuth";


const useUserData = () => {
    const axiosPublic = useAxiosPublic()
    
    const { user } = useAuth()
    const email = user?.email

    const { data: userData=[] , isLoading} = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/userData/${email}`)
            return res.data
        }
    })
    return [userData, isLoading]
};

export default useUserData;