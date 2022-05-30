import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='home-banner'>
                <div>
                    <div className='banner-section'>
                        <h1 className='first-title'>READ BOOKS</h1>
                        <h1 className='second-title'>BE A BIBLIOMANIAC</h1>
                    </div>
                    <p>Welcome to BooXplained.It is a book review website that helps people to know about books.You can choose your favourite books with the help of reviews.We encourage you to write about books that you already read and help our community to grow!!! </p>

                    <button className='home-page-btn'>Explore More</button>
                </div>
                <div>
                    <img className='banner-photo' src="https://i.ibb.co/pjzWDbd/bannerphoto.webp" alt="" />
                </div>
            </div>

            <div className='home-review-card'>
                {
                    reviews.slice(0, 3).map(review => <AllReviews
                        key={review.id}
                        review={review}
                    ></AllReviews>)
                }


            </div>
            <div className='see-review'>
                <Link to='/reviews'>
                    <button className='home-page-btn'>see all reviews  </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;