import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categorySlice";
import loginReducer from "./slice/loginSlice";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice"
export const store = configureStore({
    reducer: {
        login:loginReducer,
        user:userReducer,
        categories:categoriesReducer,
        products : productReducer
    }
})