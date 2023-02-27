import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services/authService";

export const loginThunk = createAsyncThunk(("login/login"),async(credentials,thunkApi)=> {
    const result = await loginUser(credentials)
    console.log(result.data.token.access)
    if(result.success === true) {
        return result.data.token.access
    }
    else {
        return thunkApi.rejectWithValue()
    }
})

const initialState = {
    credentials : {
        username: "",
        password : "",
    },
    token : ""
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers : {
        setCredentials : (state,action) => {
            state.credentials = {...state.credentials,[action.payload.name]:action.payload.value}
        }
    },
    extraReducers : {
        [loginThunk.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.token = action.payload
        },
        [loginThunk.rejected] : (state,action) => {
            state.token = null
        }
    }
})

export const {setCredentials} = loginSlice.actions

export default loginSlice.reducer