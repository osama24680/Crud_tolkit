import { configureStore } from "@reduxjs/toolkit"
import BookSlice from "./BookSlice"
import AuthSlice from "./AuthSlice"
import ReportSlice from "./ReportSlice"
export const storeConfigure = configureStore({
    reducer: {
        "books": BookSlice,
        "auth": AuthSlice,
        "report": ReportSlice,
    }
})

export default storeConfigure