import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [courseDetails, setCourseDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    })
    useEffect(() => {
        fetch('http://localhost:5000/all-courses')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    })
    return (
        <div>
            <p className='text-4xl text-bold text-center text-black'>There are {courses.length} courses available</p>
            <div className='flex mt-24'>
                
                <div className='border-dashed border-2 border-indigo-600 h-2/4 rounded p-3 m-2'>
                    <p className='font-bold text-orange-600 text-xl'>Course List</p>
                {
                    courses.map(course => <p className='text-green-900 hover:text-rose-900 hover:font-medium hover:text-base my-4' key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
                </div>
                <div className='pr-8 grid grid-cols-3 gap-12' >

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