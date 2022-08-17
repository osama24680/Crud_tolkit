import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { logInsert } from "./ReportSlice"
// ********** get Data **********************
export const getBooks = createAsyncThunk("book/getBooks", async (arg, thunkAPI) => {
    const rejectedRequest = thunkAPI.rejectWithValue
    try {
        const response = await fetch(`http://localhost:30009/books`)
        const data = await response.json()
        return data
    } catch (error) {
        return rejectedRequest(error.message)
    }
})

// ********** insert Data **********************
export const insertBooks = createAsyncThunk("book/insertBooks", async (arg, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    try {
        arg.userName = getState().auth.name
        const response = await fetch(`http://localhost:30009/books`, {
            method: "POST",
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(arg)
        })
        const data = await response.json()
        dispatch(logInsert({ ...arg, name: "insertedBook", status: "success added" }))
        return data
    } catch (error) {
        dispatch(logInsert({ ...arg, name: "insertedBook", status: "failed added" }))
        return rejectWithValue(error.message)
    }
})
// ********** delete Data **********************
export const deleteBooks = createAsyncThunk("book/deleteBooks", async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {

        await fetch(`http://localhost:30009/books/${arg.id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json; charset=UTF-8" },
        })
        // const data = await response.json()
        // no json in jsonServer 
        return arg
    } catch (error) {

        return rejectWithValue(error.message)
    }
})
// ********** detail Data **********************
export const getDetailBook = createAsyncThunk("book/getDetailBook", async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await fetch(`http://localhost:30009/books/${arg.id}`)
        const DetailsData = await response.json()
        console.log(DetailsData)
        return DetailsData
    } catch (error) {

        return rejectWithValue(error.message)
    }

})

const initialState = {
    name: "osama",
    loading: false,
    error: null,
    results: [],
    detailsBook: [],
}

export const BookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: {
        // listens for any function out of this scope

        // ********** get Data **********************
        [getBooks.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.results = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // ********** insert Data **********************
        [insertBooks.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [insertBooks.fulfilled]: (state, action) => {
            state.loading = false
            state.results.push(action.payload)
        },
        [insertBooks.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        // ********** delete Data **********************
        [deleteBooks.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [deleteBooks.fulfilled]: (state, action) => {
            state.loading = false
            state.results = state.results.filter(el => el.id !== action.payload.id)
        },
        [deleteBooks.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        // ********** detail Data **********************
        [getDetailBook.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getDetailBook.fulfilled]: (state, action) => {
            state.loading = false
            state.detailsBook=(action.payload)
        },
        [getDetailBook.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})


export default BookSlice.reducer
export const { } = BookSlice.actions