import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Dashboard></Dashboard>,

    },
    {
        path: 'auth/login',
        element: <Login></Login>
    }
])

export default router;