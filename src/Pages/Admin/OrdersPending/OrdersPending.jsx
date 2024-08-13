import { useQuery } from "react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { ModalContainer, Reoverlay } from "reoverlay";
import PendingOrderDetails from "./PendinOrderDetails/PendingOrderDetails";
import { toast } from "sonner";
import Swal from "sweetalert2";



const OrdersPending = () => {
    const axiosPublic = useAxiosPublic()
    const { data: PendingOrders = [], refetch } = useQuery({
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

    const handleAcceptOrder = (id, order) => {
        axiosPublic.post(`/acceptOrder/${id}`, order)
            .then(res => {
                if (res.data.insertedId) {
                    toast('order placed as done, please check Orders Done section')
                    refetch()
                }
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    }

    const handleDeleteOrder = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/deleteOrder/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success('Order deleted successfully')
                            refetch()
                        }
                    })
                    .catch(err => {
                        toast.error(`${err.message}`)
                    })
            }
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
                            <th>Payable Total</th>
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
                                <td>{order?.payableTotal} Tk</td>
                                <td>
                                    <button className="btn btn-xs btn-success text-white mr-2" onClick={() => handleAcceptOrder(order._id, order)}>Accept</button>
                                    <button className="btn btn-xs btn-error text-white mr-2" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
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