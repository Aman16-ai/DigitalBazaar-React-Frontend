import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/authService";

export const getUserThunk = createAsyncThunk(("getUser/getUser"),async(thunkApi)=> {
    const result = await getUser()
    console.log(result)
    if(!("user" in result.data)) {
        return thunkApi.rejectWithValue()
    }
    else if(result.success === true) {
        return result.data.user
    }
    else {
        return thunkApi.rejectWithValue()
    }
})

const initialState = {
    user:{},
    isAuthenticated : false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        setIsAuthenticated : (state,action) => {
            state.isAuthenticated = action.payload
        }
    },
    extraReducers : {
        [getUserThunk.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.user = action.payload
            state.isAuthenticated = true
        },
        [getUserThunk.rejected] : (state,action) => {
            state.user = null
            state.isAuthenticated = false
        }
    }
})


export const {setIsAuthenticated} = userSlice.actions
export default userSlice.reducer