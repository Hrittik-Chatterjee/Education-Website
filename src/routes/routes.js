import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componenets/Blog";
import Courses from "../Componenets/Courses";
import Error from "../Componenets/Error";
import Faq from "../Componenets/Faq";
import Home from "../Componenets/Home";
import Login from "../Componenets/Login";
import Register from "../Componenets/Register";
import Main from "../Layout/Main";
import Profile from "../Componenets/Profile";
import IndCourseDetails from "../Componenets/IndCourseDetails";
import PremiumCourseDetails from "../Componenets/PremiumCourseDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/courses/:id',
          element:<IndCourseDetails></IndCourseDetails>,
          loader: ({params})=>fetch (`https://edu-10-server.vercel.app/courses/${params.id}`)
        },
        {
          path:'/courses/premium/:id',
          element:<PrivateRoute ><PremiumCourseDetails></PremiumCourseDetails>,</PrivateRoute>,
          loader: ({params})=>fetch (`https://edu-10-server.vercel.app/courses/premium/${params.id}`)
        },
  
      ]
    }
  ])

  export default router