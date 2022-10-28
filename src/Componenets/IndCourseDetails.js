import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const IndCourseDetails = () => {
    const loaderData = useLoaderData()

    return (
        <div className=''>
            <div>
                <img className='w-96 h-56 mx-auto' src={loaderData.thumbnail_url} alt="" />
                <h3 className='text-4xl font-sans text-yellow-500 font-bold mx-96 text-center'>{loaderData.name}</h3>
                <p className='px-12 py-4 text-lg text-emerald-400'>{loaderData.details}</p>
            </div>
            <div className='mt-12 flex  justify-center'>
                <div>
                    <h1 className='text-4xl text-red-900 font-bold  '>This course Contains</h1>
                    <ul className='text-black my-4 font-semibold'>
                        <li>{loaderData.hours} hours of video</li>
                        <li>{loaderData.article} articles </li>
                        <li>{loaderData.download} downloadable recourses</li>
                    </ul>
                    <Link><button className='bg-indigo-700 text-white rounded p-4 my-3'>Get Premium access</button></Link>
                </div>
            </div>

        </div>
    );
};

export default IndCourseDetails;