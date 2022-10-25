import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import './CheckOutPage.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';





const CheckOutPage = () => {
    const navigate = useNavigate()
    
    const checkOutCourse = useLoaderData();
    console.log(checkOutCourse);

    const { id, course_id, course_name, rating, students, course_image, course_description, duration, course_fee, instructor } = checkOutCourse;

    const { name, instructor_img } = checkOutCourse.instructor;

    const handleConfirmCheckout = () => {
        Swal.fire(
            'Great',
            `Congratulations! You have successfully enrolled the course ${course_name}`,
            'success'
        )
        navigate('/courses');
        toast.success("You Can Choose Multiple Course From Here");
    }




    return (
        <div className='container w-75 mx-auto mt-5 checkout-bg rounded-3'>
            <h3 className='text-center text-primary mb-4 mt-3 pt-3'>Checkout Page</h3>

            <Table striped bordered hover variant="light" className='text-center border border-1 fw-bold mt-3'>
                <thead>
                    <tr>
                        <th className='fs-5 text-success'>Course Details</th>
                    </tr>
                </thead>
                <tbody className='fw-bold'>
                    <tr>
                        <td>Course ID: {course_id}</td>
                    </tr>
                    <tr>
                        <td>Course Name: {course_name}</td>
                    </tr>
                    <tr>
                        <td>Course Duration: {duration}</td>
                    </tr>

                    <tr>
                        <td>Course Fee: {course_fee}</td>
                    </tr>
                </tbody>
            </Table>

            <div className='text-center'>
                <Button onClick={handleConfirmCheckout} className='ms-3 mt-2 fw-bold mb-3 confirm-checkout-button' variant="success">Confirm Checkout</Button>
            </div>

        </div>
    );
};

export default CheckOutPage;