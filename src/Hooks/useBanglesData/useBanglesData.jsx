import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from 'react-query';

const useBanglesData = () => {
    const axiosPublic = useAxiosPublic()

    const { data: bangles = [], isLoading, refetch } = useQuery({
        queryKey: ['bangles'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bangles')
            console.log(res.data)
            return res.data
        }
    })

    return [bangles, refetch ,isLoading]
};


export default useBanglesData;