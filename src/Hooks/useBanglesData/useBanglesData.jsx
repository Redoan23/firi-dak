import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from 'react-query';

const useBanglesData = () => {
    const axiosPublic = useAxiosPublic()

    const { data: bangles = [], isLoading, refetch } = useQuery({
        queryKey: ['bangles'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bangles')
            return res.data
        }
    })

    return [bangles, refetch ,isLoading]
};


export default useBanglesData;