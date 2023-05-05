import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserCart,
  addItemToCart,
  getCartItems,
  incrementCartItemQuantity,
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

export const incrementCartItemQuantityThunk = createAsyncThunk("incrementCartItemQuantity/incrementCartItemQuantity",async(payload,thunkApi)=> {
  const result = await incrementCartItemQuantity(payload.cartItemId,payload.quantity)
  if (result.success === true) {
    return {"Reponse":result.data,"cartItemId":payload.cartItemId,"quantity":payload.quantity}
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
        updated_cart.getCartTotalItems += 1;
        updated_cart.getCartTotal += product.getFinalPrice;
        updated_cart.getCartOriginalPrice += product.price;
        state.user_cart = updated_cart;
      }
    },
    [incrementCartItemQuantityThunk.fulfilled] : (state,action) => {
      const cartitems = [...state.cartItems]
      for(let i =0;i<cartitems.length;i++) {
        if(cartitems[i].id === action.payload.cartItemId) {
          cartitems[i].quantity += 1
        }
      }
      state.cartItems = cartitems
    }
  },
});

export default cartSlice.reducer;
