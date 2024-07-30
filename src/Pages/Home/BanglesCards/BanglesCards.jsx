import PrimaryCard from "../../../components/PrimaryCard";
import useBanglesData from "../../../Hooks/useBanglesData/useBanglesData";


const BanglesCards = () => {

    // const axiosPublic = useAxiosPublic()

    // const { data: bangles = [], isLoading } = useQuery({
    //     queryKey: ['bangles'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/bangles')
    //         return res.data
    //     }
    // })

    const [bangles, isLoading] = useBanglesData()

    if (isLoading) {
        return <div className=" text-center flex items-center mx-auto justify-center"> <p> loading please wait</p></div>
    }

    return (
        <PrimaryCard dataArray={bangles} title={'Bangles'} />
    );
};

export default BanglesCards;