import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsAPI from 'services/phonebookAPI';

const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await contactsAPI.logInUser(credentials)
            contactsAPI.token.set(response.data.token);
            return response.data
        } catch (error) {

        }

    }
)
const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            const response = await contactsAPI.logOutUser()
            contactsAPI.token.unset();
            return response.data
        } catch (error) {

        }

    }
)
const registerUser = createAsyncThunk(
    'auth/logoutUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await contactsAPI.registerUser(credentials)
            contactsAPI.token.set(response.data.token);
            return response.data
        } catch (error) {

        }

    }
)
const refreshUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, thunkAPI) => {
        try {
            const response = await contactsAPI.refreshCurrUser()
            contactsAPI.token.set(response.data.token);
            return response.data;
        } catch (error) {

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