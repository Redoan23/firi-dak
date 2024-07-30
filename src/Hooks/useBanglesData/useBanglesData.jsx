import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from 'react-query';

const useBanglesData = () => {
    const axiosPublic = useAxiosPublic()

    const { data: bangles = [], isLoading } = useQuery({
        queryKey: ['bangles'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bangles')
            return res.data
        }
    })

    return [bangles, isLoading]
};


export default useBanglesData;