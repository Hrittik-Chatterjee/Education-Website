import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses,setCourses] =useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    return (
        <div>
            <h2>this is courses{courses.length}</h2>
            <div>
                {
                    courses.map(course=><p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Courses;