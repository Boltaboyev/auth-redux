import React from "react"
import {Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import HomePage from "../pages/home"

const PrivateRoute = () => {
    const user = Cookies.get("user")

    return user ? <HomePage /> : <Navigate to="/login" />
}

export default PrivateRoute
