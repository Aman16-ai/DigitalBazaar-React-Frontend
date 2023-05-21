import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categorySlice";
import loginReducer from "./slice/loginSlice";
import userReducer from "./slice/userSlice";
import productsReducer from "./slice/productSlice"
import productReducer from "./slice/product/productSlice"
import cartReducer from "./slice/cart/cartSlice"
import addressReducre from "./slice/addressSlice"
export const store = configureStore({
    reducer: {
        login:loginReducer,
        user:userReducer,
        categories:categoriesReducer,
        products : productsReducer,
        product : productReducer,
        cart : cartReducer,
        address : addressReducre
    }
})