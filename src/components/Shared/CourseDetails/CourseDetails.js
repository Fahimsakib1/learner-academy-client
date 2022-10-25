import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaEye, } from "react-icons/fa";
import { FaClock, FaUserAlt, FaStar } from "react-icons/fa";
import './CourseDetails.css'

const CourseDetails = () => {

    const course = useLoaderData();
    const { id, course_id, course_name, rating, students, course_image, course_description, duration, course_fee, instructor } = course;
    const { name, instructor_img } = course.instructor
    console.log(course);

    return (
        <div>
            <Card className='container mt-5 w-75 border border-0'>

                <Card.Body className='border border-2 border-primary mt-3 course-card-body rounded-3'>
                    <Card.Header as="h3" className='text-white text-center border border-2 border-dark rounded-3 course-title-name mb-3'>{course_name}</Card.Header>
                    <div className='d-flex align-items-center'>
                        <Card.Title className='me-2'>Enjoy {course_name} with {name}</Card.Title>
                        <Image
                            roundedCircle
                            src={instructor_img}
                            style={{ height: "60px" }}
                        >
                        </Image>
                    </div>
                    <Card.Img variant="top" src={course_image} className='my-2 card-image-new rounded-3' />
                    <Card.Text>
                        <div>
                            <p className=''><span className='fw-bold'>Description:</span> <span className=''>{course_description}</span></p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaClock></FaClock>
                            <p className="card-text ms-2"><span className='fw-bold'>Duration:</span> {duration}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaUserAlt></FaUserAlt>
                            <p className="card-text ms-2"><span className='fw-bold'>Students: </span>{students}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p className='mb-0'><span className='fw-bold'>Ratings:</span> {rating.number}</p>
                            <FaStar className='text-warning me-2'></FaStar>
                        </div>
                    </Card.Text>
                    <Card.Footer as="h4" className="text-center text-white border border-2 border-dark course-card-footer rounded-3">Course Fee : {course_fee}</Card.Footer>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;