import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserCart,
  addItemToCart,
  getCartItems,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from "../../../services/cartService";
import { updateUserCart } from "../../../utility/cartUtils";

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
    const product = item["product"];
    delete item["product"];
    const result = await addItemToCart(item);
    if (result.success === true) {
      return { Response: result.data, Product: product };
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

export const incrementCartItemQuantityThunk = createAsyncThunk("incrementCartItemQuantity/incrementCartItemQuantity", async (payload, thunkApi) => {
  const result = await incrementCartItemQuantity(payload.cartItemId, payload.quantity)
  if (result.success === true) {
    return { "Reponse": result.data, "cartItemId": payload.cartItemId, "quantity": payload.quantity }
  }
  return thunkApi.rejectWithValue();
})

export const decrementCartItemQuantityThunk = createAsyncThunk("decrementCartItemQuantity/decrementCartItemQuantity", async (payload, thunkApi) => {
  const result = await decrementCartItemQuantity(payload.cartItemId, payload.quantity)
  if (result.success === true) {
    return { "Reponse": result.data, "cartItemId": payload.cartItemId, "quantity": payload.quantity }
  }
  return thunkApi.rejectWithValue();
})


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
        const product = action.payload.Product;
        console.log("add item reducer product :", product);
        const updated_cart = { ...state.user_cart };
        state.user_cart = updateUserCart(updated_cart,product,true)
      }
    },
    [incrementCartItemQuantityThunk.fulfilled]: (state, action) => {
      console.log("Inside incrementCartItemThunk", action.payload)
      const response = action.payload.Reponse
      if (response.status === true) {
        const cartitems = [...state.cartItems]

        //updating the quantity of cart item
        for (let i = 0; i < cartitems.length; i++) {
          if (cartitems[i].id === action.payload.cartItemId) {
            cartitems[i].quantity += 1
          }
        }

        //updating the user cart
        const product = response.Reponse.product
        const updated_cart = {...state.user_cart};
        state.user_cart = updateUserCart(updated_cart,product,true);

        state.cartItems = cartitems
      }
    },
    [decrementCartItemQuantityThunk.fulfilled]: (state, action) => {
      console.log("Inside decrementCartItemThunk", action.payload)
      const response = action.payload.Reponse
      if (response.status === true) {
        const cartitems = [...state.cartItems]

        //updating the quantity of cart item
        for (let i = 0; i < cartitems.length; i++) {
          if (cartitems[i].id === action.payload.cartItemId) {
            cartitems[i].quantity -= 1
          }
        }

        //updating the user cart
        const product = response.Reponse.product
        const updated_cart = {...state.user_cart};
        state.user_cart = updateUserCart(updated_cart,product,false);

        state.cartItems = cartitems
      }
    }
  },
});

export const selectUserCart = (state) => state.cart.user_cart
export default cartSlice.reducer;
