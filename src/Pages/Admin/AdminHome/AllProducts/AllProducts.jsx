import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import useBanglesData from "../../../../Hooks/useBanglesData/useBanglesData";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const AllProducts = () => {

    const [bangles, refetch] = useBanglesData()
    const axiosPublic = useAxiosPublic()
    const [status, setStatus] = useState(null)

    const handleStockStatus = (e) => {
        const selectedStatus = e.target.value

        setStatus(selectedStatus)
    }

    const handleStatusSubmit = (id) => {
        if (!status) {
            return toast.error('Please select a valid status')
        }

        axiosPublic.patch(`/bangles/${id}`, { status })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Status changed')
                    refetch()
                }
            })
    }

    const handleDeleteItem = (id) => {
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
                axiosPublic.delete(`/deleteBangles/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success('Deleted successfully')
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
        <div className=" mx-auto text-center mt-12">
            <h3 className=" py-3 text-3xl font-bold">All Products</h3>
            <div>
                <div className="overflow-x-auto ">
                    <table className="table w-full border rounded-lg">
                        <thead className="bg-gray-200 text-gray-600">
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Current Status</th>
                                <th>Set Stock Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bangles.map((bangle, index) => (
                                <tr key={index} className="hover:bg-gray-200">
                                    <td className=" mx-auto"><img src={bangle?.img} className=" w-16 h-16 object-cover" /></td>
                                    <td>{bangle?.name}</td>
                                    <td>{bangle?.stockStatus}</td>
                                    <td>
                                        <div className=" flex items-center gap-2 ">
                                            <select onChange={handleStockStatus} className=" bg-gray-300 outline-none border-none">
                                                <option value="">Set Status</option>
                                                <option value="Sale">Sale</option>
                                                <option value="Stock Out">Stock Out</option>
                                            </select>
                                            <button onClick={() => handleStatusSubmit(bangle._id)} className="btn btn-xs bg-orange-500 border-none text-white mr-2">Change</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(bangle._id)} className="btn btn-xs bg-red-600 border-none text-white mr-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster richColors />
        </div>
    );
};

export default AllProducts;