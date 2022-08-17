import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    logs: []
}

export const ReportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
        logInsert: (state, action) => {
            state.logs.push(action.payload)
        }
    },
})

export default ReportSlice.reducer
export const { logInsert } = ReportSlice.actions