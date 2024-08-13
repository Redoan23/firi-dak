import { useQuery } from "react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useExtraInfoData = () => {

    const axiosPublic = useAxiosPublic()
    const { data: extraInfoData = [] } = useQuery({
        queryKey: ['extraInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get('/extraInfoData')
            return res.data
        }
    })

    return [extraInfoData];
};

export default useExtraInfoData;