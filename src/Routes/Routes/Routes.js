import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import AddServices from "../../components/Pages/Services/AddServices";
import ServiceDetails from "../../components/Pages/Services/ServiceDetails";
import Services from "../../components/Pages/Services/Services";
import ErrorPage from "../../components/Pages/Shared/ErrorPage";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      // {
      //     path:"/blog",
      //     element:<Blog></Blog>,

      // },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      // {
      //     path:"/myreviews",
      //     element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,

      // },
      {
        path: "/yourservice",
        element: <AddServices></AddServices>,
      },
    ],
  },
]);
