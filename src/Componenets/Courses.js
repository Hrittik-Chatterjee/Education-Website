import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [courseDetails, setCourseDetails] = useState([])

    useEffect(() => {
        fetch('https://edu-10-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    })
    useEffect(() => {
        fetch('https://edu-10-server.vercel.app/all-courses')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    })
    return (
        <div>
            <p className='text-4xl text-bold text-center text-black'>There are {courses.length} courses available</p>
            <div className='md:flex mt-24'>
                
                <div className='md:border-dashed flex md:block md:border-2  md:border-indigo-600 md:h-2/4 md:rounded md:p-3 md:m-2 text-xs md:text-base'>

                    <p className='font-bold hidden md:block text-orange-600 text-xl'>Course List</p>
                {
                    courses.map(course => <p className='text-green-900 hover:text-rose-900 md:hover:font-medium md:hover:text-base mx-2 my-4' key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
                </div>
                <div className='pr-8 grid grid-cols-1 md:grid-cols-3 gap-12 ml-12 md:ml-0' >

                    {
                        courseDetails.map(courseDetail => <div key={courseDetail._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-80 w-full' src={courseDetail.thumbnail_url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{courseDetail.name}</h2>
                                <p>{courseDetail.title}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/courses/${courseDetail.category_id}`}><button className="btn btn-primary object-bottom">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;