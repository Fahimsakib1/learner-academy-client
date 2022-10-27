import React, { useContext, useState } from 'react';
import './FAQ.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const FAQ = () => {

    const{theme, setTheme, toggleTheme} = useContext(AuthContext);
    
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);
    const [toggle7, setToggle7] = useState(false);

    const handleAnswer1 = () => {
        setToggle1(!toggle1);
    }

    const handleAnswer2 = () => {
        setToggle2(!toggle2);
    }

    const handleAnswer3 = () => {
        setToggle3(!toggle3);
    }

    const handleAnswer4 = () => {
        setToggle4(!toggle4);
    }

    const handleAnswer5 = () => {
        setToggle5(!toggle5);
    }

    const handleAnswer6 = () => {
        setToggle6(!toggle6);
    }

    const handleAnswer7 = () => {
        setToggle7(!toggle7);
    }





    return (
        <div className='container mt-4 rounded-3'>
            <h3 className='text-center fw-semibold text-primary mb-3'>Frequently Asked Questions</h3>

            <div className=''>

                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 1: What is This Project About?</Card.Title>
                        <Card.Text>
                            {
                                toggle1 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer:</span> Learner Academy is a online platform which provides different courses related to computer science and programming languages. A user can easily select a course based on his interest and can get the premium access also if he logged in. User can also checkout by selecting the course he wants. There are many other features also which you can try out. There is a blog section which answers some of the highly asked question about React.js</p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle1 ?

                                <Button onClick={handleAnswer1} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer1} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>


                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 2: What are the things that used in this Project?</Card.Title>
                        <Card.Text>
                            {
                                toggle2 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> This website is made by using React Router DOM, Firebase authentication is the major part of this project. A Uer can login by using email-password. Also I have added the options for google and github login. Besides React Bootstrap is used for the styling purpose. Custom css is used where necessary. React toastify and sweet alert is added to show the alerts for better user experience.  Fo the toggling purpose of the light and dark theme I have use React Switch and for pdf generator I have used React Print library</p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle2 ?

                                <Button onClick={handleAnswer2} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer2} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>


                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 3: Features of the Project?</Card.Title>
                        <Card.Text>
                            {
                                toggle3 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> Well, this gonna be interesting, because there are lots of features in this project. In the courses page there are listed all the courses that is available right now. when a user clicked on a course link (left side of the page) of the course card then the user will be directed to a course details route which he has chosen. After getting in to the course details section user can see all the information related to the course instructor, enrolled students, course duration, course fee etc. If the user is not logged in in the website then he will not be able to get the premium access. user can select multiple curses also. If someone wants to visit a route which is not available in the website then an error message will be shown. I have also implemented dark and light mode on the whole website based on the toggling button. </p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle3 ?

                                <Button onClick={handleAnswer3} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer3} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>


                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 4: Is there any server side in this project?</Card.Title>
                        <Card.Text>
                            {
                                toggle4 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> This is project is basically divided in two parts. Client Side and Server Side.
                                        As this project is about online course providing for the students, I needed much data regarding the courses and course details. Fo that I have used node.js and express.js for the server purpose. I have created many data according to the courses and all the data are fetch from the client side. there is no static data in this project.</p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle4 ?

                                <Button onClick={handleAnswer4} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer4} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>


                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 5: If I want to make this type of project what things should I have to keep in my mind?</Card.Title>
                        <Card.Text>
                            {
                                toggle5 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> You can easily make these type of projects. But for this you have to have to clear understanding about React Route, Context API. Besides you have to learn about firebase authentication also. I am not telling this project is very easy,  but if you have patience and dedication then you can surely make it</p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle5 ?

                                <Button onClick={handleAnswer5} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer5} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>



                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 6: Can we expect more courses in future?</Card.Title>
                        <Card.Text>
                            {
                                toggle6 && (
                                    <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> Surely. For the shortest period of time I have added only 56 courses but in the near future there will more courses to come. We are very much dedicated to our students and we are always there for them. Please connect with us vis social media to get the updates from our website</p>
                                )
                            }
                        </Card.Text>
                        {
                            toggle6 ?

                                <Button onClick={handleAnswer6} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer6} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>


                <Card className='mb-4 faq-card'>
                    <Card.Header className='faq-title' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title>Question 7: Can we get the github links of the project?</Card.Title>
                        <Card.Text>
                            {
                                toggle7 && (
                                    <div>
                                        <p className='py-2 fs-6'> <span className='text-primary fw-bold'>Answer: </span> Github Links are added below.</p>

                                        <p><span>Github Link Client Side:</span> <span className='text-primary fw-bold'>https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-Fahimsakib1</span></p>
                                        
                                        <p><span>Github Link Server Side:</span> <span className='text-primary fw-bold'>https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-Fahimsakib1</span></p>
                                    </div>

                                )
                            }
                        </Card.Text>
                        {
                            toggle7 ?

                                <Button onClick={handleAnswer7} variant={theme === 'dark' ? "primary" : "outline-primary"}>Hide Answer</Button>

                                :

                                <Button onClick={handleAnswer7} variant={theme === 'dark' ? "primary" : "outline-primary"}>Show Answer</Button>
                        }
                    </Card.Body>
                </Card>

            </div>





        </div>
    );
};

export default FAQ;