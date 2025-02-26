import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Button, Checkbox, Divider, TextField} from "@mui/material"
import axios from "axios"
import {toast} from "react-toastify"
import Cookies from "js-cookie"

// img
import login from "../../assets/login.svg"

// icons
import logo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"

const LoginPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const mockApiUrl = "https://67a2eab7409de5ed5256be7b.mockapi.io/users"

        try {
            const response = await axios.get(mockApiUrl)
            const users = response.data

            const user = users.find(
                (user) =>
                    user.email === formData.email &&
                    user.password === formData.password
            )

            if (user) {
                toast.success("Login successful!")

                Cookies.set("user", JSON.stringify(user))

                navigate("/")
            } else {
                toast.error("Invalid email or password!")
            }
        } catch (error) {
            toast.error("Failed to login!")
            console.error(error)
        }
    }

    return (
        <section className="py-[10px]">
            <div className="container2 flex flex-col gap-[20px]">
                <Link to={"/"}>
                    <img src={logo} alt="logo" className="w-[180px]" />
                </Link>

                <div className="grid grid-cols-2 gap-[20px]">
                    <div className="flex flex-col justify-center items-start gap-[17px]">
                        <h1 className="font-semibold text-3xl text-[#313131]">
                            Login
                        </h1>
                        <p className="font-normal text-base text-[#313131] opacity-75">
                            Login to access your travelwise account
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-[15px] w-full">
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <div className="flex justify-between items-center gap-[10px] select-none">
                                <div className="flex justify-center items-center ">
                                    <Checkbox
                                        id="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="checkbox"
                                        className="font-medium text-sm text-[#313131]">
                                        Remember me
                                    </label>
                                </div>

                                <Link
                                    to={"/forgot-password"}
                                    className="font-medium text-sm text-right text-[#ff8682]">
                                    Forgot Password
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                className="!bg-[#515DEF]">
                                Login
                            </Button>
                        </form>

                        <p className="font-medium text-sm text-center w-full text-[#313131]">
                            Don’t have an account?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-[#ff8682]">
                                Sign up
                            </Link>
                        </p>

                        <Divider
                            textAlign="center"
                            className="w-full font-normal text-sm text-[#313131] opacity-50">
                            Or login with
                        </Divider>

                        <div className="grid grid-cols-3 gap-[10px] w-full">
                            <Button variant="outlined" className="!py-[13px]">
                                <img src={facebook} alt="facebook" />
                            </Button>

                            <Button variant="outlined" className="!py-[13px]">
                                <img src={google} alt="facebook" />
                            </Button>

                            <Button variant="outlined" className="!py-[13px]">
                                <img src={apple} alt="facebook" />
                            </Button>
                        </div>
                    </div>

                    {/* img */}
                    <div className="flex justify-center items-center">
                        <img src={login} alt="img" className="h-[580px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
