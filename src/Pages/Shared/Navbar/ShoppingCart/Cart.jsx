import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import useAuth from '../../../../Hooks/useAuth/useAuth';
import { CiShoppingCart } from 'react-icons/ci';
import { PiPaperPlaneTiltThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import useCartCalculations from '../../../../Hooks/useCartCalculations/useCartCalculations';
import { removeSingleItem } from '../../../../components/localstorage';

const style = {
    position: 'absolute',
    top: '0%',
    right: '0%',
    transform: 'translate(0%, 0%)',
    width: {
        sm: '40%',
        xs: '65%',
        lg: '27%'
    },
    minHeight: '100%',
    height: 'fit-content',
    bgcolor: 'background.paper',
    border: 'none ',
    boxShadow: 24,
    p: 0,

};

const Cart = ({ cartSwitch }) => {

    const [, totalPrice, items] = useCartCalculations() //*MUST maintain the index number/serial, the first comma is not useless 
    const { refreshPage, setRefreshPage } = useAuth()

    // remove Item

    const handleRemoveItem = (id, size) => {
        removeSingleItem('cart-items', id, size)
        setRefreshPage(!refreshPage)
    }

    // modal part
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        handleOpen()
    }, [cartSwitch])



    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            className=' overflow-y-auto overflow-x-hidden'
        >
            <Slide direction='left' in={open} timeout={300}  mountOnEnter unmountOnExit >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className=' border-b '>
                            <div className=' flex items-center justify-between p-3 '>
                                <div>
                                    <h3 className=' text-black text-2xl'>Your Cart</h3>
                                </div>
                                <div className=' '>
                                    <button className='text-gray-200 bg-orange-600 m-3 text-center px-1 hover:bg-gray-100 hover:text-orange-600 btn btn-sm border-0' onClick={handleClose}> <IoIosClose className=' text-2xl ' /> </button>
                                </div>
                            </div>
                        </div>
                        <div className=' text-center mt-10'>
                            {
                                items.length === 0 ?
                                    <p className=' py-6'>No Products in Your Cart</p>
                                    :
                                    items.map(
                                        (item, i) =>
                                            <div key={i} className=' my-3 '>
                                                <div className=' flex items-center  gap-6 border p-2 w-[80%] mx-auto bg-white shadow-sm relative'>
                                                    <div className=' overflow-hidden w-24 h-24'>
                                                        <img src={item.img} alt="" className=' w-full h-full object-cover' />
                                                    </div>
                                                    <div>
                                                        <div className=' text-left'>
                                                            <h3 className=' text-gray-600 text-base'>{item.n}</h3>
                                                            <p className=' text-sm'>Size: {item.s}</p>
                                                        </div>
                                                        <div className=''>
                                                            <p className=' text-sm text-left'>{item.q} x <span className=' text-red-600'>{item?.p}</span></p>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleRemoveItem(item.i, item.s)} className=' absolute top-1 right-1'>
                                                        <IoIosClose className='  text-red-600 border hover:bg-gray-100 ease-in-out duration-300 ' />
                                                    </div>
                                                </div>
                                            </div>
                                    )
                            }
                            <div className=' sticky bottom-0 p-4 pb-7 bg-white border-t-2 border-gray-200'>
                                <p className=' text-center text-gray-600 text-base'>Subtotal: <span className=' text-red-600'>{totalPrice}</span> TK</p>
                                <div className=' flex gap-3 pt-3 justify-center'>
                                    <Link to={'/cartDetails'} onClick={handleClose}>
                                        <button className=' btn rounded-none bg-transparent border-[0.5px] border-gray-300 hover:border-gray-300 text-stone-600 text-sm hover:bg-orange-600 hover:text-white flex items-center gap-2 '><CiShoppingCart className=' text-lg' /> View Cart</button>
                                    </Link>
                                    <Link to={'/checkout'} onClick={handleClose}>
                                        <button className=' btn rounded-none bg-transparent border-[0.5px] border-gray-300 hover:border-gray-300 text-stone-600 text-sm hover:bg-orange-600 hover:text-white flex items-center gap-2 '> <PiPaperPlaneTiltThin /> Place Order</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Slide>
        </Modal>
    )

}

export default Cart;