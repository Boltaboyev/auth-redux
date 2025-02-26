import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
}

const authSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        
    },
})

export const {} = authSlice.actions
export default authSlice.reducer