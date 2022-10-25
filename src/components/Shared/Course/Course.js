import React from 'react';
import './Course.css';
import { FaClock } from "react-icons/fa";

const Course = ({ course }) => {
    const { id, name, image, duration, about } = course;

    return (
        <div>
            <div className="col">
                <div className="card all-courses-card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className=''>About: <span className='text-muted course-about-para'>{about.slice(0, 100) + '...'}</span></p>
                        <div className='d-flex align-items-center'>
                            <FaClock></FaClock>
                            <p className="card-text ms-2">Duration: {duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;