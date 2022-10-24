import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='main-div'>
            <div className='overlay mx-auto w-75'>
                <div className='d-flex justify-content-center'>
                    <div className='title-paragraph-div'>
                        <h1 className='title text-center'>Hello Learners!</h1>
                        <p className='paragraph text-center'><span className='text-primary fw-bold'>Welcome to Learner Academy! </span>We provide best quality courses in the domain of Computer Science and Networking. If you want to build your career in Computer Science then you have come to the right place. Don't miss the opportunity to be a part of us for leading the world. Enroll Now!</p>
                    </div>
                </div>
                <Link to='/register'><button className='fs-5 start-page-register-button' type='button'>Register</button></Link>
            </div>
        </div>
    );
};

export default Home;