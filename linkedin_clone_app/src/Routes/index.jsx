import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
]);