import useAllUser from "../../../Hooks/useAllUser/useAllUser";


const UserControl = () => {

    const [allUser] = useAllUser()


    const handleUserRole = (e) => {
        console.log(e.target.value)
        console.log('ssss')
    }
    const handleUpdateUserRole = () => {

    }
    const handleDeleteUser = (id) => {
        console.log(id)
    }

    return (
        <div className=" mt-12">
            <div>
                <h3 className=" text-4xl font-bold text-center underline">Users List</h3>
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
                            allUser?.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        <select onChange={handleUserRole} name="" id="" className=" bg-white rounded-md">
                                            <option value="admin">Admin</option>
                                            <option value="normalUser">Normal User</option>
                                        </select>
                                        <button onClick={handleUpdateUserRole} className=" dropdown-bottom btn btn-xs bg-blue-600 text-white border-none hover:bg-blue-700">Update Role</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user?._id)} className=" btn btn-xs bg-red-600 text-white border-none hover:bg-red-700">Delete User</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserControl;