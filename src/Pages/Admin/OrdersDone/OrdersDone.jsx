import { useQuery } from "react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { ModalContainer, Reoverlay } from "reoverlay";
import PendingOrderDetails from "../OrdersPending/PendinOrderDetails/PendingOrderDetails";
import Swal from "sweetalert2";
import { toast } from "sonner";


const OrdersDone = () => {

    const axiosPublic = useAxiosPublic()

    const { data: ordersDone = [], refetch } = useQuery({
        queryKey: ['ordersDone'],
        queryFn: async () => {
            const res = await axiosPublic.get('/ordersDone')
            return res.data
        }
    })

    const handleShowDetails = (order) => {
        Reoverlay.showModal(PendingOrderDetails, {
            data: order
        })
    }

    const handleDelete = (id) => {
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
                axiosPublic.delete(`/deleteAcceptedOrder/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success(' Deleted successfully')
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
                        {
                            ordersDone?.length ?
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>District</th>
                                    <th>Delivery Option</th>
                                    <th>Actions</th>
                                </tr>
                                :
                                <tr className=" text-center">
                                    <th>Table</th>
                                </tr>
                        }
                    </thead>
                    <tbody>
                        {
                            ordersDone?.length === 0 && <tr className=" font-bold col-span-full row-span-full">
                                <td className="  text-center text-4xl py-8 col-span-full row-span-full w-full">
                                    The List Is Empty
                                </td>
                            </tr>
                        }
                        {ordersDone?.map((order, index) => (
                            <tr key={index} className="hover:bg-gray-200">
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.district}</td>
                                <td>{order.deliveryOption}</td>
                                <td>
                                    <button className="btn btn-xs btn-error text-white mr-2" onClick={() => handleDelete(order._id)}>Remove forever</button>
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

export default OrdersDone;