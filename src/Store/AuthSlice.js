import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    name: "Osama Megahed"
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInOut: (state, action) => {
            state.isLogged = !state.isLogged
        },

    },
})

export default AuthSlice.reducer
export const { loggedInOut } = AuthSlice.actions