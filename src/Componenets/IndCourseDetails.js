import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";



const ref = React.createRef();

const IndCourseDetails = () => {
    const loaderData = useLoaderData()

    return (
        <div>

            <div className=' flex justify-center'>

                <div ref={ref}>
                    <img className='w-96 h-56 mx-auto rounded' src={loaderData.thumbnail_url} alt="" />
                    <h3 className='text-4xl font-sans text-yellow-500 font-bold  text-center'>{loaderData.name}</h3>
                    <p className='px-12 py-4 md:text-lg text-sm text-emerald-400'>{loaderData.details}</p>

                    <div className=' flex justify-center'>
                        <Link to={`/courses/premium/${loaderData.category_id}`}><button className='bg-amber-500 text-white rounded p-4 mb-40 mr-4 '>Get Premium access</button></Link>
                        <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => <button className='bg-red-700 text-white rounded p-4 mb-40' onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IndCourseDetails;