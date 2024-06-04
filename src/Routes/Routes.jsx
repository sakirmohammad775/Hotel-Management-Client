import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Rooms from "../Pages/Rooms/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails/RoomDetails";
import SignUp from "../Pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/rooms",
          element:<Rooms></Rooms>,
          loader:()=>fetch('http://localhost:5000/rooms')
        },
        {
          path:"/rooms/:id",
          element:<RoomDetails></RoomDetails>,
          loader:()=>fetch('http://localhost:5000/rooms')

        },
        {
          path:"/signIn",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);