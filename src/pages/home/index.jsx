import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {Button, Card, CardContent, Typography} from "@mui/material"
import {logoutUser} from "../../redux/authSlice"

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authReducer.user)

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/login")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-[400px] p-4 shadow-lg">
                <CardContent className="flex flex-col gap-4">
                    <Typography
                        variant="h5"
                        className="text-center font-semibold">
                        Welcome, {user.name} {user.surname}!
                    </Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Phone: {user.phoneNum}</Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleLogout}
                        className="!mt-4">
                        Logout
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePage
