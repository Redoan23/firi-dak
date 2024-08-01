import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { getItemFromLocalStorage } from '../../../../components/localstorage';

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


    // modal part
    const [subTotal, setSubTotal] = useState(0)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        handleOpen()
    }, [cartSwitch])

    const cartItem = getItemFromLocalStorage('cart-items')
    useEffect(() => {
        if (cartItem.length > 0) {
            const subTotalCalculation = cartItem.reduce((accumulator, item) => { return (accumulator + (item.p * item.q)) }, 0)
            setSubTotal(subTotalCalculation)
        }
    }, [cartItem])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            className=' overflow-y-auto overflow-x-hidden'
        >
            <Slide direction='left' in={open} mountOnEnter unmountOnExit>
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
                                cartItem.length === 0 ?
                                    <p>No Products in Your Cart</p>
                                    :
                                    cartItem.map(
                                        (item, i) =>
                                            <div key={i} className=' my-3 '>
                                                <div className=' flex items-center justify-center gap-6 border p-5 w-[80%] mx-auto'>
                                                    <div>
                                                        <img src="https://www.jsjs.com" alt="" className=' w-full h-full object-cover' />
                                                    </div>
                                                    <div>
                                                        <div className=' text-left'>
                                                            <h3 className=' text-gray-600'>{item.n}</h3>
                                                            <p className=' text-sm'>Size: {item.s}</p>
                                                        </div>
                                                        <div className=''>
                                                            <p className=' text-sm '>{item.q} x <span className=' text-red-600'>{item?.p}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                            }
                            <div className=' sticky bottom-0 text-center p-3 bg-white shadow-lg border-t-2 border-gray-200'>
                                <p className=' text-center text-gray-600'>subtotal: <span className=' text-orange-600'>{subTotal}</span></p>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Slide>
        </Modal>
    )

}

export default Cart;