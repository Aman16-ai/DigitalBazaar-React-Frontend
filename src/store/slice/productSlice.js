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
export const getLaptopProductsThunk = createAsyncThunk(("getLaptopProducts/getLaptopProducts"),async(category,thunkApi)=> {
    const result = await getProducts(`?category__name=${category}`)
    console.log("redux "+result)
    if(result.success && "data" in result) {
        return result.data
    }
    else {
        return thunkApi.rejectWithValue();
    }
})

export const getMensProductThunk = createAsyncThunk(("getMensProduct/getMensProduct"),async(category,thunkApi)=> {
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
    laptopDeals:[],
    mensWearProducts :[],
    topProducts:[],
}

export const productsSlice = createSlice({
    name:"products",
    initialState,
    extraReducers : {
        [getAllProductsThunk.fulfilled] : (state,action) => {
            state.products = action.payload
        },
        [getAllProductsThunk.rejected] : (state,action) => {
           state.products = []
        },
        [getLaptopProductsThunk.fulfilled] : (state,action) => {
            state.laptopDeals = action.payload
        },
        [getLaptopProductsThunk.rejected] : (state,action) => {
            state.laptopDeals = []
        },
        [getMensProductThunk.fulfilled] : (state,action) => {
            state.mensWearProducts = action.payload
        },
        [getMensProductThunk.rejected] : (state,action) => {
            state.mensWearProducts = []
        }
    }
})


export default productsSlice.reducer