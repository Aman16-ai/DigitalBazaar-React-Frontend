import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/productService";

export const getAllProductsThunk = createAsyncThunk(("getProduct/getProduct"),async(thunkApi)=> {
    const result = await getProducts()
    if(result.success && "allProducts" in result.data) {
        return result.data.allProducts
    }
    else {
        return thunkApi.rejectWithValue();
    }
})
export const getMensWearProductsThunk = createAsyncThunk(("getMensProducts/getMensProducts"),async(category,thunkApi)=> {
    const result = await getProducts(`?category__name=${category}`)
    console.log("redux "+result)
    if(result.success && "data" in result) {
        return result.data
    }
    else {
        return thunkApi.rejectWithValue();
    }
})

const initialState = {
    products:[],
    mensWearProducts :[],
    topProducts:[],
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    extraReducers : {
        [getAllProductsThunk.fulfilled] : (state,action) => {
            state.products = action.payload
        },
        [getAllProductsThunk.rejected] : (state,action) => {
           state.products = []
        },
        [getMensWearProductsThunk.fulfilled] : (state,action) => {
            console.log("promise mens wear",action.payload)
            state.mensWearProducts = action.payload
        },
        [getMensWearProductsThunk.rejected] : (state,action) => {
            state.mensWearProducts = []
        }
    }
})


export default productSlice.reducer