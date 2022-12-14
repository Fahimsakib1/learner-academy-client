import React, { useContext } from 'react';
import './Header.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaUserAlt } from 'react-icons/fa';
import Logo from '../../../images/logo/Logo.PNG'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import ReactSwitch from "react-switch";


const Header = () => {

    const { user, handleSignOut, githubLogin, toggleTheme, theme, setTheme } = useContext(AuthContext);
    console.log("User From Header", user)

    const { displayName, photoURL } = githubLogin;
    console.log("By Github", githubLogin.displayName, githubLogin.photoURL)

    const userSignOut = () => {
        handleSignOut()
            .then(() => {
            })

            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Logout Failed!'
                })
            })
    }




    return (
        <Navbar collapseOnSelect expand="lg" className='pb-3 navbar-container' variant={theme === "light" ? "dark" : "light"} >
            <Container className='d-flex flex-md-column flex-lg-row flex-xl-row navbar-inner'>

                <div className='d-flex justify-content-center align-items-center mt-1'>
                    <Navbar.Brand href="#home"><img className='img-fluid header-image' src={Logo} alt="" /></Navbar.Brand>
                    <Link className='header-title' to="/"><span className='website-title'>Learner Academy</span></Link>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        {/* <NavLink className="ms-3" to='/home'>Home</NavLink> */}
                        {/* <NavLink>Pricing</NavLink> */}

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
                    <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/courses'>Courses</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/faq'>FAQ</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>



                        <>
                            {
                                user?.uid ?
                                    <div className='d-flex align-items-center'>
                                        <p className='me-1 mt-1 fs-6 user-name-header' style={{ color: "goldenrod" }}>Welcome, {user?.displayName}
                                        </p>
                                        <Link to='/profile'>
                                            {
                                                user?.photoURL ?
                                                    <Image title={user.displayName} className='header-small-image' roundedCircle src={user?.photoURL} style={{ height: "40px" }} >
                                                    </Image>
                                                    :
                                                    <FaUserAlt className='fs-3 rounded-4 mt-1'></FaUserAlt>
                                            }
                                        </Link>

                                        <Link to='/'><button onClick={userSignOut} className='btn btn-danger '>Logout</button></Link>

                                    </div>
                                    :
                                    <>
                                        <Link className='me-2' to='/login'>Login</Link>
                                        <Link to='/register' className='me-2 mb-2'>Register</Link>
                                        {/* <Link to='/profile'><FaUserAlt className='fs-3 rounded-4 ms-2 text-white mt-1'></FaUserAlt></Link> */}
                                    </>
                            }
                        </>

                        <div className='mt-2'  title={theme === "dark" ? "Press For Light Mode" : "Press For Dark Mode"}>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                        </div>











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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;