import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategroies } from "../../services/productService";

export const fetchAllCategroiesThunk = createAsyncThunk(("fetchCategory/fetchCategory"),async(thunkApi)=> {
    const result = await fetchAllCategroies()
    if(result.success && "categories" in result) {
        return result.categories
    }
    else {
        return thunkApi.rejectWithValue();
    }
})

const initialState = {
    categories:[],
}

export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    extraReducers : {
        [fetchAllCategroiesThunk.fulfilled] : (state,action) => {
            state.categories = action.payload
        },
        [fetchAllCategroiesThunk.rejected] : (state,action) => {
           state.categories = []
        }
    }
})


export default categoriesSlice.reducer