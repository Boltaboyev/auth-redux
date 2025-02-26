import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Button, Checkbox, Divider, TextField} from "@mui/material"
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import {registerUser} from "../../redux/authSlice"

// img
import register from "../../assets/register.svg"

// icons
import logo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"

const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNum: "",
        password: "",
        confirmPassword: "",
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
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!")
            return
        }

        try {
            await dispatch(registerUser(formData))
            toast.success("Registration successful!")
            navigate("/login")
        } catch (error) {
            toast.error("Failed to register!")
            console.error(error)
        }
    }

    return (
        <section className="py-[20px]">
            <div className="container2 flex flex-col gap-[20px]">
                <Link to={"/"} className="self-end">
                    <img src={logo} alt="logo" className="w-[180px]" />
                </Link>

                <div className="grid grid-cols-2 gap-[20px] items-center">
                    <div className="flex justify-center items-center">
                        <img src={register} alt="img" className="h-[600px]" />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-[17px]">
                        <h1 className="font-semibold text-3xl text-[#313131]">
                            Sign up
                        </h1>
                        <p className="font-normal text-base text-[#313131] opacity-75">
                            Let’s get you all set up so you can access your
                            personal account.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-[15px] w-full">
                            <div className="grid grid-cols-2 gap-[20px]">
                                <TextField
                                    size="small"
                                    id="name"
                                    name="name"
                                    label="First Name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    size="small"
                                    id="surname"
                                    name="surname"
                                    label="Last Name"
                                    variant="outlined"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <TextField
                                    size="small"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    size="small"
                                    id="number"
                                    name="phoneNum"
                                    label="Phone Number"
                                    type="number"
                                    variant="outlined"
                                    value={formData.phoneNum}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <TextField
                                size="small"
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                size="small"
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <div className="flex justify-start items-center select-none">
                                <Checkbox
                                    id="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="checkbox"
                                    className="font-medium text-sm text-[#313131]">
                                    I agree to all the{" "}
                                    <span className="font-semibold text-[#ff8682] cursor-pointer">
                                        Terms
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-semibold text-[#ff8682] cursor-pointer">
                                        Privacy Policies
                                    </span>
                                </label>
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                className="!bg-[#515DEF]">
                                Create account
                            </Button>
                        </form>
                        <p className="font-medium text-sm text-center w-full text-[#313131]">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-[#ff8682]">
                                {" "}
                                Login
                            </Link>
                        </p>
                        <Divider
                            textAlign="center"
                            className="w-full font-normal text-sm text-[#313131] opacity-50">
                            Or Sign up with
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
                </div>
            </div>
        </section>
    )
}

export default RegisterPage
