import { useState } from "react";
import useAllUser from "../../../Hooks/useAllUser/useAllUser";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { toast, Toaster } from "sonner";
import Swal from "sweetalert2";


const UserControl = () => {

    const [allUser, , refetch] = useAllUser()
    const axiosPublic = useAxiosPublic()
    const [updatedRole, setUpdatedRole] = useState(null)


    const handleUserRole = (e) => {
        setUpdatedRole(e.target.value)
    }
    const handleUpdateUserRole = async (email) => {
        if (!updatedRole) {
            return toast.error('Please select a role')
        }
        Swal.fire({
            title: "Are you sure?",
            text: "The role will be changed",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const userRole = updatedRole
                const res = await axiosPublic.patch(`/user/updateRole/${email}`, { userRole })
                if (res.data.modifiedCount > 0) {
                    toast.info(`updated user Role`)
                    refetch()
                }
                else {
                    toast.error(`${res.data}`)
                }
            }
        });

    }

    // deleting a user
    const handleDeleteUser = async (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "The role will be changed",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosPublic.delete(`/user/delete/${email}`)
                if (res.data.deletedCount > 0) {
                    toast.success(`Deleted user `)
                    refetch()
                }
                else {
                    toast.error(`Could't delete the user try again`)
                }
            }
        });


    }

    return (
        <div className=" mt-12">
            <div>
                <h3 className=" text-4xl font-bold text-center underline">Total Users ({allUser?.length})</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-gray-700">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <select onChange={handleUserRole} name="updateROle" id="updateRole" className=" bg-white rounded-md">
                                            <option value="">Select Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="normalUser">Normal User</option>
                                        </select>
                                        <button onClick={() => handleUpdateUserRole(user.email)} className=" dropdown-bottom btn btn-xs bg-blue-600 text-white border-none hover:bg-blue-700">Update Role</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user.email)} className=" btn btn-xs bg-red-600 text-white border-none hover:bg-red-700">Delete User</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <Toaster className=" z-[100]"></Toaster>
        </div>
    );
};

export default UserControl;