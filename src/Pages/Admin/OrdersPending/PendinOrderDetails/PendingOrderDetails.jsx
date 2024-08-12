import { ModalWrapper, Reoverlay } from 'reoverlay';

import 'reoverlay/lib/ModalWrapper.css';

const PendingOrderDetails = ({ data }) => {
    console.log(data)
    const closeModal = () => {
        Reoverlay.hideModal();
    }

    return (
        <ModalWrapper>
            <div className=' p-5 overflow-auto max-h-screen'>
                <h3 className=' text-center font-semibold text-xl'>Total ordered items: {data?.orders.length}</h3>
                <div className=' flex gap-3 p-4'>
                    <div>
                        <h3 className='text-gray-500'><span className=' font-bold text-gray-500'>Name:</span> {data?.name}</h3>
                        <h3 className='text-gray-500'> <span className=' font-bold text-gray-500'>Number:</span> {data?.phone}</h3>
                        <h3 className='text-gray-500'> <span className=' font-bold text-gray-500'>Secondary Number:</span>{data?.secondaryPhone}</h3>
                    </div>
                    <div className=' border-r border-gray-500'>

                    </div>
                    <div>
                        <h3 className='text-gray-500'><span className=' font-bold text-gray-500'>District:</span> {data?.district}</h3>
                        <h3 className='text-gray-500'> <span className=' font-bold text-gray-500'>Address: </span>{data?.address}</h3>
                    </div>
                </div>
                <h3 className=' text-center text-gray-500 p-3'>
                    <span className=' font-bold text-orange-500'>Note:</span> {data?.notes ? data.notes : 'No Notes'}</h3>
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
                                data?.orders?.map((order, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td><img src={order?.img} alt="" className=' h-16 w-16 object-cover' /></td>
                                        <td>{order.n}</td>
                                        <td>{order.s}</td>
                                        <td>{order.q}</td>
                                    </tr>)
                            }
                            {/* TODO: here i need to add the other infos like phone email etc.... */}
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