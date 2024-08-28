
import useAuth from '../../Hooks/useAuth/useAuth';
import { Navigate } from 'react-router-dom';
import useUserData from '../../Hooks/useUserData/useUserData';

const AdminRoutes = ({ children }) => {

    const { user, loading } = useAuth()
    const [userData] = useUserData()
    const userRole = userData?.role


    if (loading) {
        return <div className=" w-full min-h-screen flex justify-center items-center flex-col bg-gray-100">
            <span className="loading loading-ring w-[4rem]"></span>
        </div>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    if (userRole === 'admin') {
        return children
    }
    return <Navigate to='/login'></Navigate>


};

export default AdminRoutes;