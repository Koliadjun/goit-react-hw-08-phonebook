import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Phonebook/phonebook-reducer';
import authReducer from './authorization/authorization-slice'
const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
