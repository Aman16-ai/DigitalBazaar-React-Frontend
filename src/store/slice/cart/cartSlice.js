import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCart } from "../../../services/cartService";

export const getUserCartThunk = createAsyncThunk(('getUserCart/getUserCart'),async(thunkApi)=> {
    const result = await getUserCart()
    if(result.success === true && "data" in result) {
        return result.data.user_cart
    }
    return thunkApi.rejectWithValue()
})

const initialState = {
    user_cart : null
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    extraReducers : {
        [getUserCartThunk.fulfilled] : (state,action) => {
            state.user_cart = action.payload
        },
        [getUserCartThunk.rejected] : (state,action) => {
            state.user_cart = null
        }
    }
})

export default cartSlice.reducer 