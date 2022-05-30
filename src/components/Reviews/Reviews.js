import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='review-card'>
            {
                reviews.map(review => <AllReviews
                    key={review.id}
                    review={review}
                ></AllReviews>)
            }
        </div>
    );
};

export default Reviews;