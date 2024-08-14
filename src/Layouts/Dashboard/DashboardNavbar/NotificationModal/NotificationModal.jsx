import { CgClose } from 'react-icons/cg';
import { ModalWrapper } from 'reoverlay';
import 'reoverlay/lib/ModalWrapper.css';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic/useAxiosPublic';

const NotificationModal = ({ notifications }) => {
    const axiosPublic = useAxiosPublic()
    console.log(notifications)
    // const closeModal = () => {
    //     Reoverlay.hideModal();
    // }

    const handleDeleteNotification = (id) => {
        axiosPublic.delete(`/deleteNotification/${id}`)
    }

    const handleDeleteAllNotification = () => {
        axiosPublic.delete('/deleteAllNotification')
    }

    return (
        <div className=' '>
            <ModalWrapper>
                <div className=' absolute right-3 top-10 bg-white  h-fit min-w-[285px] lg:min-w-[500px] min-h-[300px] overflow-auto max-h-screen'>
                    <div className=' flex flex-row items-center justify-between px-2 pt-2 '>
                        <h3 className=' text-gray-600 font-semibold text-lg '>Notifications</h3>
                    </div>
                    <div className=' flex justify-end mb-2 mr-2'>
                        <div onClick={handleDeleteAllNotification} className=' hover:cursor-pointer text-center pb-1 w-20 border'>Delete All</div>
                    </div>
                    <div className=' flex flex-col gap-2' >
                        {
                            notifications?.map((notification) =>
                                <div key={notification._id} className=' w-full p-4 min-w-[260px] bg-gray-100 relative '>
                                    <h3 className=' text-lg text-gray-700'>{notification?.name} ordered {
                                        notification?.orders?.length} Items.
                                    </h3>
                                    <p className=' text-xs pl-1'>please check the pending list</p>
                                    <p className=' text-xs pl-1'>{notification?.orderDate}</p>
                                    <p onClick={() => handleDeleteNotification(notification._id)} className=' absolute right-3 top-2 hover:cursor-pointer'> <CgClose /> </p>
                                </div>)
                        }
                    </div>
                </div>
            </ModalWrapper>
        </div>
    );
};

export default NotificationModal;