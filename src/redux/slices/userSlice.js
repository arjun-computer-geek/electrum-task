import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
export const getAllUsers =  createAsyncThunk("user/getAllUsers", async() => {
    try{
        const {data} = await axios.get("https://reqres.in/api/users?page=2")
        return data;
    }catch(err){

    }
})
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        error: null,
        totalPages: 1,
        currentPage: 1,
        total: 0

    },
    reducers: {
        setCurrentPage : (state, action) => {
            
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {

        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload.data;
            state.totalPages = action.payload.total_pages;
            state.currentPage = action.payload.page;
            state.total = action.payload.total;
        },
        [getAllUsers.rejected]: (state, action) => {

        },
    }
})

export default userSlice.reducer