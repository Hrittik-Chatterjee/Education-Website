import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-center my-8 text-8xl font-semibold'>Some Question and Answers</p>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-36 mb-8">
                <div className="collapse-title text-xl font-medium">
                    What is Cors?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase?What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-8">
                <div className="collapse-title text-xl font-medium">
                    What is node? How does Node Work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;