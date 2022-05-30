import React from 'react';
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
                    <p>Welcome to BooXplained.It is a book review website that hwlps people to know about books.You can choose your favourite books with the help of reviews.We encourage you to write about books that you already read and help our community to grow!!! </p>

                    <button className='explore-btn'>Explore More</button>
                </div>
                <div>
                    <img className='banner-photo' src="https://i.ibb.co/pjzWDbd/bannerphoto.webp" alt="" />
                </div>
            </div>

            <div>
                {
                    reviews.slice(0, 3).map(review => <AllReviews
                        key={review.id}
                        review={review}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};

export default Home;