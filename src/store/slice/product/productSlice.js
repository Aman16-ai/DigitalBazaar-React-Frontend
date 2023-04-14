import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../services/productService";

export const getProductById = createAsyncThunk(("getProductById/getProductById"),async(product_id,thunkApi)=> {
    const result = await getProducts(`/${product_id}`)
    console.log("product by id ",result)
    if(result.success && "data" in result) {
        return result.data
    }
    else {
        return thunkApi.rejectWithValue();
    }
})

const initialState = {
    product : {}
}

export const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    extraReducers : {
        [getProductById.fulfilled] : (state,action) => {
            state.product = action.payload
        },
        [getProductById.rejectWithValue] : (state,action) => {
            state.product = null
        }
    }
})

export default productSlice.reducer