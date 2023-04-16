import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserCart,
  addItemToCart,
  getCartItems,
} from "../../../services/cartService";

export const getUserCartThunk = createAsyncThunk(
  "getUserCart/getUserCart",
  async (thunkApi) => {
    const result = await getUserCart();
    if (result.success === true && "data" in result) {
      return result.data.user_cart;
    }
    return thunkApi.rejectWithValue();
  }
);
export const addItemToCartThunk = createAsyncThunk(
  "addItemToCart/addItemToCart",
  async (item, thunkApi) => {
    const result = await addItemToCart(item);
    if (result.success === true) {
      return result.Response;
    }
    return thunkApi.rejectWithValue();
  }
);

export const getCartItemsThunk = createAsyncThunk(
  "getCartItems/getCartItems",
  async (thunkApi) => {
    const result = await getCartItems();
    console.log("result getcartitemthunk", result);
    if (result.success === true) {
      return result.data.Result;
    }
    return thunkApi.rejectWithValue();
  }
);

const initialState = {
  user_cart: null,
  loaded: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getUserCartThunk.fulfilled]: (state, action) => {
      state.user_cart = action.payload;
    },
    [getUserCartThunk.rejected]: (state, action) => {
      state.user_cart = null;
    },
    [getCartItemsThunk.fulfilled]: (state, action) => {
      console.log("cartitem extra reducer", action.payload);
      state.cartItems = action.payload;
    },
    [getCartItemsThunk.rejected]: (state, action) => {
      state.cartItems = [];
    },
    [addItemToCartThunk.fulfilled]: (state, action) => {
      if (state.user_cart !== null) {
        // todo : update the cart value
      }
    },
  },
});

export default cartSlice.reducer;
