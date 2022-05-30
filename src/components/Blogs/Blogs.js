import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='ques-ans'>
            <div>
                <h2>What is context api??</h2>
                <p>=== As we know we can only share data from parent to child component through destructuring props in react.but context api helps to pass data without prop drilling.context api actually works as global so that data passing becomes quite easy.</p>
            </div>
            <div>
                <h2>What is semantic tag???</h2>
                <p>=== Tag that describes it's meaning in a human- and machine-readable way is called semantic tag. for example article tag is a semantic tag.It is used for writing article.On the other hand the developer and the machine both can understand that it is for an article. In fact, tag which accurately describea the purpose of the element and the type of content that is inside it is called semantic tag.</p>
            </div>

        </div>
    );
};

export default Blogs;