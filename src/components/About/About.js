import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='about-bg'>
            <div className='about'>
                <div>
                    <h1 className='about-title-first'>Who Are We</h1>
                    <p>We are a book lover community. The purpose of building this website is to encourage people to read more books.People can submit their review on any book in our website.It helps to introduce more books to people.People become eager to read books with the help of reviews. The writers also can improve their quality with the help of the public review.We wish people will visit our website and explore more and more books.</p>
                    <button className='home-page-btn'>Explore More  </button>
                </div>
                <img src="https://i.ibb.co/Mh0Z222/about1.png" alt="" />
            </div>
            <div className='about'>

                <img src="https://i.ibb.co/TWfJdMs/about2.png" alt="" />
                <div>
                    <h1 className='about-title-second'>What Our Mission</h1>
                    <p>As we have started this website as a simple book review website.But we havw plans to launch new features in the website,We are also planninf to make this website as book selling website.So that people can buy any book instantly after reading a review. We are also planning to make features for exzchanging books from one to another.We think this will be a great move and Reading books become easier for everyone.</p>
                    <button className='home-page-btn'>Explore More  </button>
                </div>
            </div>
        </div>
    );
};

export default About;