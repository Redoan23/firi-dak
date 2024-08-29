import ReviewFormPopup from "./ReviewFormPopup/ReviewFormPopup";


const Reviews = ({ itemData }) => {
    const itemId = itemData?._id
    return (
        <div>
            <div>
                <ReviewFormPopup itemId={itemId} />
            </div>
            this is reviews
        </div>
    );
};

export default Reviews;