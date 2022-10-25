import React from 'react';
import './Header.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaUserAlt } from 'react-icons/fa';
import Logo from '../../../images/logo/Logo.PNG'
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ThemeMode from '../ThemeMode/ThemeMode';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='pb-3 navbar-container' variant="dark" >
        <Container className='d-flex flex-md-column flex-lg-row flex-xl-row navbar-inner'>

            <div className='d-flex justify-content-center align-items-center mt-1'>
                <Navbar.Brand href="#home"><img className='img-fluid header-image' src={Logo} alt="" /></Navbar.Brand>
                <Link className='header-title' to="/"><span className='website-title'>Learner Academy</span></Link>
            </div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>

                <Nav className='header-links'>
                    <NavLink to='/courses'>Courses</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/faq'>FAQ</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    




                    <>
                        {/* {
                            user?.uid ?
                                <div className='d-flex align-items-center'>
                                    <p className='me-1 mt-1 fs-6' style={{ color: "goldenrod" }}>Welcome, {user?.displayName}
                                    </p>
                                    <Link to='/profile'>
                                        {
                                            user?.photoURL ?
                                                <Image className='' roundedCircle src={user?.photoURL} style={{ height: "40px" }} >
                                                </Image>
                                                :
                                                <FaUserAlt className='fs-3 rounded-4 mt-1'></FaUserAlt>
                                        }
                                    </Link>

                                    <Link to='/'><button onClick={userSignOut} className='btn btn-outline-danger '>Logout</button></Link>

                                </div>
                                :
                                <>
                                    <Link className='me-2' to='/login'>Login</Link>
                                    <Link to='/register' className='me-2 mb-2'>Register</Link>
                                    <Link to='/profile'><FaUserAlt className='fs-3 rounded-4 ms-2 text-white mt-1'></FaUserAlt></Link>
                                </>
                        } */}
                    </>











                    {/* <NavLink to='/register'>Register</NavLink> */}
                    {/* <NavLink to='/login'>Login</NavLink> */}

                    {/* 
                {
                    user?.uid
                        ?
                        <Link onClick={signOutUser} className='text-danger'>Log Out</Link>
                        :
                        <>
                            <NavLink to='/register'><span style={{color:"goldenrod"}}>Register</span></NavLink>

                            <Link to='/login'><span style={{color:"goldenrod"}}>Login</span></Link>
                        </>
                } */}

                    <div className='my-auto text-warning'>
                        {/* {
                        user?.uid && user?.email ?
                            <span> Welcome, {user.email}</span>
                            :
                            <p>{''}</p>
                    } */}
                    </div>
                </Nav>
                <div className='d-lg-none d-block'>
                    <LeftSideNav></LeftSideNav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;