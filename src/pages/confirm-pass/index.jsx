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

const SetPasswordPage = () => {
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!")
            return
        }

        const userId = localStorage.getItem("userId")

        const mockApiUrl = "https://67a2eab7409de5ed5256be7b.mockapi.io/users"

        try {
            await axios.put(`${mockApiUrl}/${userId}`, {password: newPassword})

            toast.success("Password updated successfully!")
            localStorage.removeItem("userId")
            navigate("/login")
        } catch (error) {
            toast.error("Failed to update password!")
            console.error(error)
        }
    }

    return (
        <section className="py-[10px]">
            <div className="container2 flex flex-col gap-[20px]">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[180px]" />
                </Link>

                <div className="grid grid-cols-2 gap-[20px]">
                    <div className="flex flex-col justify-center items-start gap-[17px]">
                        <h1 className="font-semibold text-3xl text-[#313131]">
                            Set a password
                        </h1>
                        <p className="font-normal text-base text-[#313131] opacity-75">
                            Your previous password has been reseted. Please set
                            a new password for your account.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-[15px] w-full">
                            <TextField
                                id="newPass"
                                label="Create Password"
                                variant="outlined"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />

                            <TextField
                                id="setPass"
                                label="Re-enter Password"
                                variant="outlined"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                className="!bg-[#515DEF]">
                                Set password
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

export default SetPasswordPage
