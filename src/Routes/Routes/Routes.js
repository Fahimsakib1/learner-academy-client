import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Layout from "../../components/Layout/Layout";
import Register from "../../components/Register/Register";
import LeftSideNav from "../../components/Shared/LeftSideNav/LeftSideNav";
import ThemeMode from "../../components/Shared/ThemeMode/ThemeMode";

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
                // loader: () => fetch('https://learner-academy-server-side.vercel.app/courses'),
                element: <LeftSideNav></LeftSideNav>
            },

            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]) 