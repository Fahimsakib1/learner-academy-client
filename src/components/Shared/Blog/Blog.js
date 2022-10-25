import React from 'react';
import './Blog.css';
import Card from 'react-bootstrap/Card';
import pic from '../../../images/blog/PrivateRoute.PNG'
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='container mx-auto mt-5 w-75'>
            <Card className='rounded-3 blog-card-parent mb-5'>
                <Card.Header as="h4" className='text-center blog-title text-white rounded-2'>Question 1: What is <span className='text-primary'>Cors ?</span></Card.Header>
                <Card.Body className='rounded-3'>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <span className='fw-bold text-primary'>Cross-origin resource sharing (CORS)</span> is a mechanism that allows a client application to request restricted resources hosted on server from a different origin. These resources may include; web fonts, videos, scripts, iframes, images and stylesheets. In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. <br></br> <br></br>
                        Most of the time, you client application only needs to access resources within the same origin but there are scenarios where your application needs to request resources residing on another domain and that’s where CORS is used. Any origin that differs from the location your client app is running on such as different scheme, domain or port needs CORS configuration in order to properly interact. This could also serve as a big security measure if your CORS is properly configured.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='rounded-3 blog-card-parent mb-5'>
                <Card.Header as="h4" className='text-center blog-title text-white rounded-2'>Question 2: Why are we using <span className='text-primary'>Firebase ?</span> <br></br> What other options do we have to implement <span className='text-primary'>Authentication ?</span></Card.Header>
                <Card.Body className='rounded-3'>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <span className='fw-bold text-primary'>Firebase, Backend-as-a-Service (BaaS),</span> is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too. Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. <br></br>
                        Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you. Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. <br></br> <br></br>

                        <h4 className='fw-bold'> There are some other platforms which is also use for authentications. Some are listed below</h4> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Ory:</h5>
                        Ory brings complete user experience control with its headless user authentication management.
                        There is a free tier and a cloud one if you intend to use a custom domain. Besides, Ory lets you create custom identity schemas to build personalized user authentication/registration forums. It also supports building single-page applications using React, Next.js, Gatsby, and AngularJS. With Ory, developers can test and validate the system without needing to code. Ory presents itself as a complete authentication and authorization platform with identity & permission management. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Supabase:</h5>
                        Supabase has multiple ways to take in your users. You can use the conventional email & password, magic links, social or phone logins. In addition, you can integrate 3rd-party authentication protocols like OAuth with a few clicks. Powered with react libraries, you can quickly start with Supabase’s pre-build auth widgets. Besides, you can integrate Supabase with REST and real-time APIs with support for GraphQL coming in future updates. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Okta:</h5>
                        Okta is a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well. In addition to tweaking password requirements, you can also enable multi-factor authentication (MFA). Moreover, one can set up Okta’s cloud authentication and let the users sign in via biometrics or push notifications. Okta allows for excellent API security by integrating identity protocols like OAuth. And you will have a single point for all API authorization policies to integrate security and development. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Amazon Cognito:</h5>
                        Cognito is Amazon’s cloud application authentication solution for the masses. It’s a low code deployment that can be used with conventional passwords or 3rd party logins like Google or Facebook. It comes with a flexible UI that can be changed as per the use case. This also has advanced user authentication features like risk-based adaptive mode. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Auth0:</h5>
                        Auth0 is the go-to user authentication platform and a Firebase alternative for good reasons. It features a universal login for all your applications to add user convenience. This is like having SSO between multiple apps. So the user won’t get annoyed to log in separately on other apps; instead will be auto-signed in via SSO. There is a central feature control dashboard for social logins, problem detections, and MFA. Moreover, there are password-less magic links for an even better user experience. Auth0 has flexible subscriptions for many use cases, including a free tier. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Authress:</h5>
                        Authress bets heavily on its authorization API and integration with your existing identity solutions. You can define granular access controls and group them accordingly by user roles. In addition, Authress also has machine-to-machine authentication and unlimited enterprise integrations. Similarly, you can use SSO and any number of social logins for your application authentication.

                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className='rounded-3 blog-card-parent mb-5'>
                <Card.Header as="h4" className='text-center blog-title text-white rounded-2'>Question 3: How does the <span className='text-primary'>Private Route</span> work?</Card.Header>
                <Card.Body className='rounded-3'>
                    <Card.Title>Answer:</Card.Title>
                    <div>
                        <span className='text-primary fw-bold'>Private Routes in React Router (also called Protected Routes)</span> require a user being authorized to visit a specific route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). For example, a user can also have roles and permissions which give a user access to specific areas of the application. <br></br> <br></br>

                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.code is given below for better understanding. <br></br> <br></br>

                        <div className='text-center'>
                            <img className='img-fluid w-75 rounded-3' src={pic} alt="" />
                        </div>
                        <br></br> <br></br>
                        This is the code for the private route.  We can see that if the user is found then it will go to the children and if there is no user then it will navigate the user to the login page. When the user will login to the system it will display the contents and redirects the user to the page which the user wanted to visit before login.

                    </div>
                </Card.Body>
            </Card>


            <Card className='rounded-3 blog-card-parent mb-5'>
                <Card.Header as="h4" className='text-center blog-title text-white rounded-2'>Question 4: What is <span className='text-primary'>Node ?</span> How Does Node Works?</Card.Header>
                <Card.Body className='rounded-3'>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Node: </h5>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Working of Node.js</h5> <br></br>
                        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br></br> <br></br>

                        <h5 className='text-primary fw-bold'>Node.js basically works on two concept</h5>
                        <ul>
                            <li><h5>Asynchronous</h5></li>
                            <li><h5>Non-blocking I/O</h5></li>
                        </ul>
                        
                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Asynchronous: </h5>
                        Asynchronous is executing a callback function. The moment it get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
                        <br></br> <br></br>

                        <h5 className='d-inline-block me-2 text-primary fw-bold'>Non-blocking I/O: </h5>
                        Non-blocking I/O  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className='text-center'>
                <Link to='/courses'><Button className='px-5 blog-button py-2'>Back To Courses</Button></Link>
            </div>


        </div>
    );
};

export default Blog;