import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ViewDetails from "../Pages/Home/ShopCat/ViewDetails/ViewDetails";
import AddAToy from "../Pages/AddAToy/AddAToy";

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
          element:<ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path:"addtoy",
          element:<AddAToy></AddAToy>
        }
      ]
    },
  ]);

  export default router