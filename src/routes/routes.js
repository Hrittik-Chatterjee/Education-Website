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
        }
  
      ]
    }
  ])

  export default router