import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([

    {
        path: "/",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,

    },
    {
        path: 'auth/login',
        element: <Login></Login>
    }
])

export default router;