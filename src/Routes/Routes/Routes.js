import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Layout from "../../components/Layout/Layout";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Blog from "../../components/Shared/Blog/Blog";
import CheckOutPage from "../../components/Shared/CheckOutPage/CheckOutPage";
import ContactForm from "../../components/Shared/ContactForm/ContactForm";
import CourseDetails from "../../components/Shared/CourseDetails/CourseDetails";
import Courses from "../../components/Shared/Courses/Courses";
import FAQ from "../../components/Shared/FAQ/FAQ";
import LeftSideNav from "../../components/Shared/LeftSideNav/LeftSideNav";
import TermsAndCondition from "../../components/Shared/TermsAndCondition/TermsAndCondition";
import UpdateProfile from "../../components/Shared/UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([ 
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/courses', 
                element: <Courses></Courses>
            },

            {
                path: '/courseDetails/:id',
                loader: ({params}) => fetch(`https://learner-academy-server-side.vercel.app/courseDetails/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },

            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://learner-academy-server-side.vercel.app/courseDetails/${params.id}`),
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/profile',
                element: <UpdateProfile></UpdateProfile>
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },

            {
                path:'/contact',
                element: <ContactForm></ContactForm>
            }

        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]) 