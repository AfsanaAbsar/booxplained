import React from 'react';
import ReactStars from 'react-rating-stars-component';


const Ratings = (props) => {
    const { ratings } = props;
    return (
        <div>
            <ReactStars
                count={ratings}
                color="#08085C"
                size={24}
                edit={false}
            />

        </div>
    );
};

export default Ratings;