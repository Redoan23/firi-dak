import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

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
    height: '100%',
    bgcolor: 'background.paper',
    border: 'none ',
    boxShadow: 24,
    p: 0,
};

const Cart = ({ cartSwitch }) => {


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
            className=''
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
                                    <button className='text-gray-200 bg-orange-600 m-3 text-center text-black px-1 hover:bg-gray-100 hover:text-orange-600 btn btn-sm border-0' onClick={handleClose}> <IoIosClose className=' text-2xl ' /> </button>
                                </div>
                            </div>
                        </div>

                        <div className=' text-center mt-10'>
                            No product in your cart
                        </div>
                    </Typography>
                </Box>
            </Slide>
        </Modal>
    )

}

export default Cart;