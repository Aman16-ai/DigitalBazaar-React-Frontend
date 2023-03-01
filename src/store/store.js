import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categorySlice";
import loginReducer from "./slice/loginSlice";
import userReducer from "./slice/userSlice"
export const store = configureStore({
    reducer: {
        login:loginReducer,
        user:userReducer,
        categories:categoriesReducer
    }
})