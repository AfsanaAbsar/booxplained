import { faQuoteLeft, faQuoteRight, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Ratings from '../Ratings/Ratings';
import './AllReviews.css'
const AllReviews = (props) => {
    const { name, review, ratings, img, book, writer } = props.review;
    return (
        <div className='all-review-card'>
            <img className='review-img' src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h3>Book: {book}</h3>
                <h5>By {writer}</h5>
                <div className='star-rating'><Ratings className='star-rating' ratings={ratings}></Ratings></div>
                <p><FontAwesomeIcon className='icon' icon={faQuoteLeft}></FontAwesomeIcon> {review} <FontAwesomeIcon className='icon' icon={faQuoteRight}></FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default AllReviews;