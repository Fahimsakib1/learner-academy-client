import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaEye, } from "react-icons/fa";
import { FaClock, FaUserAlt, FaStar, FaArrowDown, FaCrown } from "react-icons/fa";
import './CourseDetails.css';
import Table from 'react-bootstrap/Table';




const CourseDetails = () => {

    const course = useLoaderData();
    const { id, course_id, course_name, rating, students, course_image, course_description, duration, course_fee, instructor, specialty1, specialty2, specialty3, specialty4, specialty5, specialty6 } = course;
    const { name, instructor_img } = course.instructor
    console.log(course);

    return (
        <div>
            <Card className='container mt-3 w-75 border border-0'>

                <Card.Body className='border border-2 border-primary mt-3 course-card-body rounded-3'>
                    <div className=''>
                        {/* <Card.Header as="h3" className='text-white text-center border border-2 border-dark rounded-3 course-title-name mb-3'>{course_name} <Button className=''><FaArrowDown></FaArrowDown>Download</Button></Card.Header> */}

                        <Card.Header as="h4" className='text-white text-center border border-2 border-dark rounded-3 course-title-name mb-3'>
                            <div className='d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row'>
                                {course_name}
                                <Button className='ms-3 mt-2' variant="success"><FaArrowDown className='me-2'></FaArrowDown>Download PDF</Button>
                            </div>

                        </Card.Header>

                    </div>

                    <div className='d-flex align-items-center'>
                        <Card.Title className='me-2'>Learn {course_name} with {name}</Card.Title>
                        <Image
                            roundedCircle
                            src={instructor_img}
                            style={{ height: "50px" }}
                        >
                        </Image>
                    </div>
                    <Card.Img variant="top" src={course_image} className='my-2 card-image-new rounded-3' />

                    <div>
                        <div className='mt-2'>
                            <p className=''><span className='fw-bold'>Description:</span> <span style={{textAlign:"justify"}} className=''>{course_description}</span></p>
                        </div>

                        <div className='d-flex align-items-center justify-content-around mb-4 mt-2 flex-column flex-lg-row flex-md-row'>
                            <div className='d-flex align-items-center duration-div px-4 py-2  rounded-2 mb-2'>
                                <FaClock></FaClock>
                                <p className="card-text ms-2"><span className='fw-bold'>Duration:</span> {duration}</p>
                            </div>

                            <div className='d-flex align-items-center students-div px-4 py-2  rounded-2 mb-2'>
                                <FaUserAlt></FaUserAlt>
                                <p className="card-text ms-2"><span className='fw-bold'>Students: </span>{students}</p>
                            </div>

                            <div className='d-flex align-items-center rating-div px-4 py-2  rounded-2 mb-2'>
                                <p className='mb-0'><span className='fw-bold'>Ratings:</span> {rating.number}</p>
                                <FaStar className='text-warning me-2 ms-2'></FaStar>
                            </div>
                            
                        </div>

                        <div className='mx-auto container w-75 mb-3'>
                            <Table striped bordered hover variant="light" className='text-center border border-1 fw-bold'>
                                <thead>
                                    <tr>
                                        <th className='fs-5 text-primary'>Course Specialty</th>
                                    </tr>
                                </thead>
                                <tbody className='fw-bold'>
                                    <tr>
                                        <td>{specialty1}</td>
                                    </tr>
                                    <tr>
                                        <td>{specialty2}</td>
                                    </tr>
                                    <tr>
                                        <td>{specialty3}</td>
                                    </tr>

                                    <tr>
                                        <td>{specialty4}</td>
                                    </tr>
                                    <tr>
                                        <td>{specialty5}</td>
                                    </tr>
                                    <tr>
                                        <td>{specialty6}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <Card.Footer as="h4" className="text-center text-white border border-2 border-dark course-card-footer rounded-3">Course Fee : {course_fee}</Card.Footer>

                    <div className='text-center'>
                        <Link to={`/checkout/${course_id}`}>
                            <Button className='ms-3 mt-2 fw-bold premium-access-button' variant="warning"><FaCrown className='me-2'></FaCrown>Get Premium Access</Button>
                        </Link>
                    </div>

                </Card.Body>

            </Card>

        </div>
    );
};

export default CourseDetails;