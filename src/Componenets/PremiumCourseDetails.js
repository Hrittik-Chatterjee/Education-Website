import React from 'react';
import { useLoaderData } from 'react-router-dom';




const PremiumCourseDetails = () => {
    const loaderData = useLoaderData()
    return (
        <div className='mt-12 flex  justify-center'>
            
            <div>
                <div>
                    <img className='w-5/6 h-80 mx-auto rounded' src={loaderData.thumbnail_url} alt="" />
                    <h3 className='text-4xl font-sans text-yellow-500 font-bold  text-center'>{loaderData.name}</h3>
                </div>
                <div className='flex justify-center my-3 mb-16'>
                    <div>
                        <h1 className='text-4xl text-red-900 font-bold  '>This course Contains</h1>
                        <ul className='text-black  font-semibold'>
                            <li>{loaderData.hours} hours of video</li>
                            <li>{loaderData.article} articles </li>
                            <li>{loaderData.download} downloadable recourses</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PremiumCourseDetails;