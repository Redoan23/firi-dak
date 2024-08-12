import { useQuery } from "react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { ModalContainer, Reoverlay } from "reoverlay";
import PendingOrderDetails from "./PendinOrderDetails/PendingOrderDetails";



const OrdersPending = () => {
    const axiosPublic = useAxiosPublic()
    const { data: PendingOrders = [] } = useQuery({
        queryKey: ['pendingOrders'],
        queryFn: async () => {
            const res = await axiosPublic.get('/pendingOrders')
            return res.data
        }
    })


    const handleShowDetails = (order) => {
        Reoverlay.showModal(PendingOrderDetails, {
            data: order
        })
    }

    return (
        <div>
            <div className="overflow-x-auto mt-12">
                <table className="table w-full border rounded-lg">
                    <thead className="bg-gray-200 text-gray-600">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>District</th>
                            <th>Delivery Option</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PendingOrders.map((order, index) => (
                            <tr key={index} className="hover:bg-gray-200">
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.district}</td>
                                <td>{order.deliveryOption}</td>
                                <td>
                                    <button className="btn btn-xs btn-success text-white mr-2">Accept</button>
                                    <button className="btn btn-xs btn-error text-white mr-2">Delete</button>
                                    <button className="btn btn-xs btn-error text-white" onClick={() => handleShowDetails(order)}>View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalContainer />
        </div>
    );
};

export default OrdersPending;