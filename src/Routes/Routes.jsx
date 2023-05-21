import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/Home/ShopCat/ViewDetails/ViewDetails";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRouts from "./PrivateRouts";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/viewdetails/:id",
          element:<PrivateRouts><ViewDetails></ViewDetails></PrivateRouts>,
          loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path:"addtoy",
          element:<AddAToy></AddAToy>
        },
        {
          path: "mytoy",
          element: <MyToys></MyToys>,
          loader: () => fetch(`http://localhost:5000/addedtoy`)
        },
        {
          path: "alltoys",
          element: <AllToys></AllToys>,
          loader: () => fetch(`http://localhost:5000/addedtoy`)
        }
      ]
    },
  ]);

  export default router