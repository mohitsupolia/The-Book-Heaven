import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
  import About from "../components/About";
  import Blog from "../components/Blog";
  import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard"
import UploadBook from "../dashboard/UploadBook"
import ManageBooks from "../dashboard/ManageBooks"
import EditBooks from "../dashboard/EditBooks"
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import ContactUs from "../components/ContactUs";
import Order from "../components/Order";
import SearchCategory from "../components/SearchCategory";
import CreatePayment from "../components/CreatePayment";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
          path: "/book/:id",
          element: < SingleBook/>,
          // Otherwise localhost 8080
          loader: ({params}) => fetch(`http://localhost:8080/book/${params.id}`)
        },
        {
          path:"/contact",
          element: <ContactUs/>
        },
        {
          path: "/order",
          element: <Order/>
        },
        {
          path: "/book-category",
          element: <SearchCategory />,
          loader: ({ request }) => {
            const url = new URL(request.url);
            const category = url.searchParams.get('category'); // Get the search query from the URL
            if (!category) throw new Error("Category not found"); // Handle missing category case
            return fetch(`http://localhost:8080/book-category/${category}`);
          }
        }
        
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:8080/book/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <Signup/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "logout",
      element: <Logout/>
    },
    // This is not working because In frontend i click on place order button on order page then directly open Razorpay Payment Gateway. this is the reason it is not used... And not used CreatePayment Page....
    {
      path: "/create-order",
      element: <CreatePayment/>
    }
  ]);

  export default router;
  