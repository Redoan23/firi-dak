
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import moment from 'moment';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic/useAxiosPublic';
import { toast, Toaster } from 'sonner';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ReviewFormPopup = ({ itemId }) => {

    const axiosPublic = useAxiosPublic()

    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // rating star state management
    const [rating, setRating] = useState(0)
    const date = moment().format('MMMM D, YYYY')

    // form part
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        if (rating === 0) {
            return alert('Please Enter Rating')
        }
        data.itemId = itemId
        data.rating = rating
        data.reviewDate = date

        axiosPublic.post('/pendingReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.info('Thank you. Your review will be posted shortly')
                }
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })

        reset()
        handleClose()
    };


    return (
        <div>
            <div>
                <div className=''>
                    <Button sx={{ color: 'red', textAlign: 'left' }} onClick={handleOpen}>Click to write a review</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="body2" component="h2">

                                <div className=' pt-2 pb-5'>
                                    <p className=' text-black'>Your Rating</p>
                                    <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">

                                    {/* Review Text */}
                                    <div className="mb-4">
                                        <label htmlFor="reviewText" className="block text-gray-700">
                                            Review
                                        </label>
                                        <textarea
                                            id="reviewText"
                                            {...register('reviewText', { required: 'Review text is required' })}
                                            placeholder="Write your review here..."
                                            className={`w-full px-3 py-2 bg-gray-100 outline-none no-border rounded-lg`}
                                        />
                                        {errors.reviewText && (
                                            <p className="text-red-600 mt-1">{errors.reviewText.message}</p>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register('name', { required: 'Name is required' })}
                                            placeholder="Enter your name"
                                            className={`w-full px-3 py-2 bg-gray-100 outline-none no-border rounded-lg `}
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 mt-1">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-gray-700">
                                            Email (your email will not be published)
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            placeholder="Enter your email"
                                            className={`w-full px-3 py-2 bg-gray-100 outline-none no-border rounded-lg`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
            <Toaster richColors duration={4000} className=" z-[100]" />
        </div>
    );
};

export default ReviewFormPopup;