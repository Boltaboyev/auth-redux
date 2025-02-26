import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
import {Button, Card, CardContent, Typography} from "@mui/material"

const HomePage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = Cookies.get("user")
        setUser(JSON.parse(userData))
    }, [navigate])

    const handleLogout = () => {
        Cookies.remove("user")
        navigate("/login")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {user ? (
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
            ) : (
                <Typography variant="h6">Loading...</Typography>
            )}
        </div>
    )
}

export default HomePage
