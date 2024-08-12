import { useQuery } from "react-query";


const OrdersDone = () => {

    const { data: ordersDone = [] } = useQuery({
        queryKey: ['ordersDone'],
        queryFn: async () => {
            
        }
    })

    return (
        <div>
            this is orders done
        </div>
    );
};

export default OrdersDone;