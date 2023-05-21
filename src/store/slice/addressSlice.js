import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserAddress } from "../../services/addressService";

export const getAllUserAddressThunk = createAsyncThunk(("getaddress/getaddress"),async(thunkApi)=> {
    const result = await getAllUserAddress()
    console.log(result)
    if(result.success === true) {
        return result.data
    }
    else {
        return thunkApi.rejectWithValue();
    }
})

const initialState = {
    userAddress : [],
    isloaded : false
}

export const addressSlice = createSlice({
    name:"addressSlice",
    initialState,
    extraReducers:{
        [getAllUserAddressThunk.fulfilled] : (state,action) => {
            console.log("thunk api address ------>",action.payload)
        }
    }
})

export default addressSlice.reducer