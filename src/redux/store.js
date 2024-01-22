import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice';
import userReducer from './features/users-slice'
export const store = configureStore({
    reducer : {
        authReducer,
        userReducer
    }
})
export default store;   