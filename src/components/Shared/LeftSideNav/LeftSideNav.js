// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import './LeftSideNav.css'

// const LeftSideNav = () => {

//     const [courses, setCourses] = useState([]);
//     useEffect(() => {
//         fetch('https://learner-academy-server-side.vercel.app/courses')
//             .then(res => res.json())
//             .then(data => setCourses(data))
//     }, [])
//     console.log(courses);

//     return (
//         <div className='mt-4'>
//             <h5>Offered Courses: {courses.length}</h5>
//             <div>
//                 {
//                     courses.map(course => <p key={course.id}>
//                         <Link to={`/courses/${course.id}`}>{course.name}</Link>
//                     </p>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default LeftSideNav;