import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { ModalContainer, Reoverlay } from "reoverlay";
import NotificationModal from "./NotificationModal/NotificationModal";


const DashboardNavbar = () => {

    const axiosPublic = useAxiosPublic()
    const { data: notificationData = [], refetch } = useQuery({
        queryKey: ['notificationData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/notificationData')
            return res.data
        }
    })

    const handleShowDetails = (notifications) => {
        Reoverlay.showModal(NotificationModal, {
            notifications: notifications,
            refetch: refetch
        })
        refetch()
    }

    return (
        <div className="">
            <div className=" bg-teal-800 pb-1 z-50 px-9 flex items-center justify-between w-full border">
                <NavLink to={'/'}>
                    <h3 className='font-black ease-in-out duration-300'>
                        <span className=" text-orange-600 text-4xl">F</span><span className=" text-[#c2c7d1fa]">IRIDAK</span>
                    </h3>
                </NavLink>
                <div onClick={() => handleShowDetails(notificationData)} >
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {
                                notificationData
                                &&
                                <span className="badge badge-lg indicator-item rounded-full w-5 h-5 bg-orange-400 text-white">{notificationData?.length}</span>

                            }
                        </div>
                    </button>
                </div>
            </div>
            <ModalContainer />
        </div>
    );
};

export default DashboardNavbar;