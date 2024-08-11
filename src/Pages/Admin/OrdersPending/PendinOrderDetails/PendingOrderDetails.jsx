import { ModalWrapper, Reoverlay } from 'reoverlay';

import 'reoverlay/lib/ModalWrapper.css';

const PendingOrderDetails = ({ confirmText = [] }) => {
    console.log(confirmText)
    const closeModal = () => {
        Reoverlay.hideModal();
    }

    return (
        <ModalWrapper>
            <div className=' p-5'>
                <h3 className=' text-center font-semibold text-xl'>Total ordered items: {confirmText.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                confirmText?.orders.map((order, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td><img src={order?.img} alt="" className=' h-16 w-16 object-cover' /></td>
                                        <td>{order.n}</td>
                                        <td>{order.s}</td>
                                        <td>{order.q}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className=' text-center py-3'>
                <button className=' text-center mx-auto btn btn-sm rounded-sm bg-orange-600 text-white hover:bg-orange-700 border-none' onClick={closeModal}>Close</button>
            </div>
        </ModalWrapper>
    )
};

export default PendingOrderDetails;