import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authorization-operation';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrUser: false,
    error: null
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.loginUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logoutUser.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.registerUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrUser = false;
        },
        [authOperations.refreshUser.pending](state) {
            state.isFetchingCurrUser = true;
        },
        [authOperations.loginUser.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.registerUser.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.refreshUser.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.logoutUser.rejected](state, { payload }) {
            state.error = payload;
        },

    }
})

export default authSlice.reducer;