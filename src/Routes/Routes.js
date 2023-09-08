import Home from "../Page/Home";
import Login from "../Page/Login";
import HomeLayout from "../Layout/HomeLayout";
import Register from "../Page/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <h2>Eroooor Occured</h2>,
  },
]);

export default router;
