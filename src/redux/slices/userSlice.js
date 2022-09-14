import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loggedInUser: null,
        error: null,
    },
    extraReducers: {

    }
})

export default userSlice.reducer