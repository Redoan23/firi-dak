import { useQuery } from "react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAllUser from "../../../Hooks/useAllUser/useAllUser";
import AllProducts from "./AllProducts/AllProducts";


const AdminHome = () => {

    const axiosPublic = useAxiosPublic()
    const { data: registeredUser = [] } = useQuery({
        queryKey: ['registeredUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user/registered')
            return res.data
        }
    })

    const [allUser] = useAllUser()

    return (

        <div className=" mx-auto mt-12">
           
                <div className="stats shadow max-w-xl bg-white z-0">
                    <div className="stat place-items-center">
                        <div className="stat-title text-gray-500">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-gray-500">Total Current Users</div>
                        <div className="stat-value text-secondary">{allUser?.length}</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-gray-500">Total Registers</div>
                        <div className="stat-value">{registeredUser?.length}</div>
                    </div>
                </div>
           
            <div>
                <AllProducts></AllProducts>
            </div>
        </div>
    );
};

export default AdminHome;