
import { useState } from "react";

// modal 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import usePendingReviews from "../../../Hooks/usePendingReviews/usePendingReviews";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

// modal style
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

const ReviewPending = () => {

    const axiosPublic = useAxiosPublic()
    const [pendingReviews, refetch] = usePendingReviews()

    // modal functions
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // accept and delete functions

    const handleAcceptReview = (reviewData) => {
        axiosPublic.post(`/acceptedReview/${reviewData._id}`, reviewData)
        refetch()
    }

    const handleDeleteReview = (id) => {

        axiosPublic.delete(`/deleteReview/${id}`)

        refetch()
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date Submitted</th>
                            <th>Rating Given</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingReviews.map((review, i) =>
                                <tr key={review._id} className="bg-base-200">
                                    <th>{i + 1}</th>
                                    <td>{review.name}</td>
                                    <td>{review.email}</td>
                                    <td>{review.reviewDate}</td>
                                    <td>{review.rating}</td>
                                    <td>
                                        <div>
                                            <Button sx={{ color: '#F97316', fontSize: '13px', fontFamily: 'sans-serif' }} onClick={handleOpen}>View Text</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        {
                                                            review?.reviewText
                                                        }
                                                    </Typography>
                                                </Box>
                                            </Modal>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleAcceptReview(review)} className=" btn btn-xs bg-blue-600 text-white">Accept</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteReview(review._id)} className=" btn btn-xs bg-red-600 text-white">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewPending;