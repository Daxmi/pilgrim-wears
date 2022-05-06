import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: true,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutStart: (state) => {
            state.currentUser = null;
            state.error = false;
        },
        googleStart: (state) => {
            state.isFetching = false
        },
        googleSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        googleFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess, logoutStart, googleStart, googleSuccess, googleFailure } = userSlice.actions;
export default userSlice.reducer;