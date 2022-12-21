import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactForm.css'




const ContactForm = () => {
    return (
        <div className='mx-auto mt-5 border border-2 p-4 contact-form-main-div'>
            <Form
                action='https://formspree.io/f/xzbwnkow'
                method='POST'
                className=' mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email" required/>
                </Form.Group>

                <div class="form-floating mb-4">
                    <textarea name='message' class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" required></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>

                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;