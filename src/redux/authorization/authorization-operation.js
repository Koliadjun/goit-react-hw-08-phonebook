import { createAsyncThunk } from '@reduxjs/toolkit'

import * as contactsAPI from 'services/phonebookAPI'
import Toastify from 'toastify-js'

const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await contactsAPI.logInUser(credentials)
            contactsAPI.token.set(response.token);
            return response
        } catch (error) {
            Toastify({
                text: `${error.message} `,
                duration: 4000,
                style: {
                    background: "#ff0000",
                }
            }).showToast();
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            const response = await contactsAPI.logOutUser()
            contactsAPI.token.unset()
            return response
        } catch (error) {
            Toastify({
                text: `${error.message} `,
                duration: 4000,
                style: {
                    background: "#ff0000",
                }
            }).showToast();
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await contactsAPI.registerUser(credentials)
            contactsAPI.token.set(response.token);
            return response
        } catch (error) {
            Toastify({
                text: `${error.message} `,
                duration: 4000,
                style: {
                    background: "#ff0000",
                }
            }).showToast();
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        try {
            contactsAPI.token.set(persistedToken);
            const response = await contactsAPI.refreshCurrUser()
            return response
        } catch (error) {
            Toastify({
                text: `${error.message} `,
                duration: 4000,
                style: {
                    background: "#ff0000",
                }
            }).showToast();
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const operations = {
    loginUser,
    logoutUser,
    registerUser,
    refreshUser

};
export default operations;