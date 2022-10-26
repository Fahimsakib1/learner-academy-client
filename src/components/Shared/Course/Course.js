import React from 'react';
import './Course.css';
import { FaClock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, image, duration, about } = course;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/courseDetails/${id}`)
    }
    
    return (
        <div>
            <div className="col">
                <div onClick={handleCardClick} className="card all-courses-card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary fw-bold">{name}</h5>
                        <p className=''><span className='text-dark fw-bold'>About:</span> <span className='text-muted course-about-para'>{about.slice(0, 120) + '...'}</span></p>
                        <div className='d-flex align-items-center text-dark fw-bold'>
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
