import {
    createBrowserRouter,
   
  } from "react-router-dom";
import AddClass from "../components/Dashboard/AddClass";
import EnrolledClass from "../components/Dashboard/EnrolledClass";
import ManageClasses from "../components/Dashboard/ManageClasses";
import MyClassroom from "../components/Dashboard/MyClassroom";
import Payment from "../components/Dashboard/payment/Payment";
import PaymentHistory from "../components/Dashboard/PaymentHistory";
import SelectedClasses from "../components/Dashboard/Table/SelectedClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import ManageUser from "../Pages/Dashboard/ManageUser";
import ErrorPage from "../Pages/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRourte";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<HomeLayout></HomeLayout>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>
        },
      ]
      
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:"manage-user",
          element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path:"manage-class",
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:"add-class",
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:"my-classroom",
          element:<InstructorRoute><MyClassroom></MyClassroom></InstructorRoute>
        },
        {
          path:'my-classes',
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:"payment/:id",
          element:<Payment></Payment>
        },
        {
          path:"payment-history",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:"enrolled-classes",
          element:<EnrolledClass></EnrolledClass>
        },
      ]
    }
   
  ]);

  export default router;