import {createBrowserRouter} from "react-router-dom"

// pages
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"
import ChangePasswordPage from "../pages/change-pass"
import PrivateRoute from "../private"
import SetPasswordPage from "../pages/confirm-pass"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
    {
        path: "forgot-password",
        element: <ChangePasswordPage />,
    },
    {
        path: "confirm-password",
        element: <SetPasswordPage />,
    },
])
