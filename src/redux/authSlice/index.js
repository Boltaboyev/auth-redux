import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"

const initialState = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : [],
}

const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            axios
                .post(
                    "https://67a2eab7409de5ed5256be7b.mockapi.io/users",
                    action.payload
                )
                .then((response) => {
                    state.user = response.data
                    Cookies.set("user", JSON.stringify(response.data))
                })
                .catch((error) => console.error(error))
        },

        logoutUser: (state) => {
            Cookies.remove("user")
            state.user = []
        },
    },
})

export const {registerUser, logoutUser} = authSlice.actions
export default authSlice.reducer
