import React from 'react';
import './TermsAndCondition.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div className='container'>
            <div className='mx-auto my-5 terms-condition-card-parent'>
                <Card className='rounded-3 '>
                    <Card.Header as="h4" className='text-center terms-title text-white rounded-3'>Terms And Conditions</Card.Header>
                    <Card.Body className='terms-card-body'>
                        <Card.Title>Please Read Carefully</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice</li>
                                <li>This website uses cookies to monitor browsing preferences. </li>
                                <li>You have to maintain the decorum of our community</li>
                                <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. </li>
                                <li>This website contains material which is owned by or licensed to us </li>
                                <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. </li>
                                <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of Bangladesh.</li>
                            </ul>
                        </Card.Text>
                        <div  className='text-center my-2'>
                            <Link to='/register'><Button variant="primary">Go To Register</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

            </div>

        </div>
    );
};

export default TermsAndCondition;