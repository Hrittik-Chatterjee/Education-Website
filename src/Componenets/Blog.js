import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-center my-3 md:my-8 text-2xl md:text-8xl font-semibold'>Some Question and Answers</p>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box md:mt-36 mt-16 mb-8">
                <div className="collapse-title text-xl font-medium">
                    What is Cors?
                </div>
                <div className="collapse-content">
                    <p> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase?What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps it is easy to use.Firebase alternatives are MongoDB ,Oracle Database,Amazon Redshift,DataStax Enterprise,Redis Enterprise Cloud.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work
                </div>
                <div className="collapse-content">
                    <p>private route redirect URL and on authenticate condition. there are certain conditions if the user fulfils those conditions private route redirect to url otherwise it doesn't show</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-8">
                <div className="collapse-title text-xl font-medium">
                    What is node? How does Node Work?
                </div>
                <div className="collapse-content">
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. node is used as a backend service  Node. js runs on chrome v8 engine which converts javascript code into machine code</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;