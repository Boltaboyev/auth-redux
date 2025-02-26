import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Button, Divider, TextField} from "@mui/material"
import {toast} from "react-toastify"
import axios from "axios"

// img
import password from "../../assets/password.svg"

// icons
import logo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import {FaChevronLeft} from "react-icons/fa6"

const ChangePasswordPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const mockApiUrl = "https://67a2eab7409de5ed5256be7b.mockapi.io/users"

        try {
            const response = await axios.get(mockApiUrl)
            const users = response.data

            const user = users.find((user) => user.email === email)

            if (user) {
                localStorage.setItem("userId", user.id)

                navigate("/confirm-password")

                toast.success("Set new password")
            } else {
                toast.error("Email not found!")
            }
        } catch (error) {
            toast.error("Failed to check email!")
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
                        <Link
                            to={"/login"}
                            className="font-medium text-sm text-[#313131] flex justify-center items-center gap-[4px]">
                            <FaChevronLeft className="text-[10px]" />
                            Back to login
                        </Link>
                        <h1 className="font-semibold text-3xl text-[#313131]">
                            Forgot your password?
                        </h1>
                        <p className="font-normal text-base text-[#313131] opacity-75">
                            Don’t worry, happens to all of us. Enter your email
                            below to recover your password
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-[15px] w-full">
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                className="!bg-[#515DEF]">
                                Submit
                            </Button>
                        </form>

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
                        <img src={password} alt="img" className="h-[500px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePasswordPage
