import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth()

    if (loading) {
        return <div className=" w-full min-h-screen flex justify-center items-center flex-col bg-gray-100">
            <span className="loading loading-ring w-[4rem]"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>


};

export default PrivateRoutes;