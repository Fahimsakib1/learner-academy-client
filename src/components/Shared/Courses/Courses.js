import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learner-academy-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);

    return (
        <div className='mt-4 mx-auto'>
            <div className='row container mx-auto'>

                <div className='col-lg-4 col-md-12 col-sm-12 text-center mb-4'>
                    <h5 className='mt-3 offered-course-title py-2 mb-4'> Our Offered Courses: {courses.length}</h5>
                    {
                        courses.map(course => <div className=''>

                            <ListGroup className='mt-3 course-links px-5' key={course.id}>
                                <Link to={`/courseDetails/${course.id}`}><ListGroup.Item className='text-white course-name-list py-3 fs-5'>{course.name}</ListGroup.Item></Link>
                            </ListGroup>

                        </div>)
                    }
                </div>

                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h5 className='mt-3 course-title py-3 text-center'> Computer Science All Courses</h5>
                    <div className='row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 mx-auto mt-2 mb-3'>
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Courses;