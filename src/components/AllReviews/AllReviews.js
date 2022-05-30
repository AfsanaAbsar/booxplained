import React from 'react';
import './AllReviews.css'
const AllReviews = (props) => {
    const { name, review, ratings, img } = props.review;
    return (
        <div className='review-card'>
            <img className='review-img' src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h3>Ratings : {ratings}</h3>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default AllReviews;