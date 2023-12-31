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
import EditInfo from "../Pages/MyToys/EditInfo/EditInfo";
import Notfound from "../Pages/NotFound/Notfound";

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
          loader: ({params}) => fetch(`https://devils-horn-toy-server.vercel.app/alltoys/${params.id}`)
        },
        {
          path:"addtoy",
          element: <PrivateRouts><AddAToy></AddAToy></PrivateRouts>
        },
        {
          path: "mytoy",
          element: <PrivateRouts><MyToys></MyToys></PrivateRouts>,
          loader: () => fetch(`https://devils-horn-toy-server.vercel.app/addedtoy`)
        },
        {
          path: "alltoys",
          element: <PrivateRouts><AllToys></AllToys></PrivateRouts>,
          loader: () => fetch(`https://devils-horn-toy-server.vercel.app/addedtoy`)
        },
        {
          path: "editinfo/:id",
          element: <EditInfo></EditInfo>,
          loader: ({params}) => fetch(`https://devils-horn-toy-server.vercel.app/addedtoy/${params.id}`)
        }
      ]
    },
    {
      path: "*",
      element: <Notfound></Notfound>
    }
  ]);

  export default router