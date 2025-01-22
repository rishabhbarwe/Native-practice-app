import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        signUpData : null,
    },
    reducers : {
       setSignUpData : (state,action)=>{
              state.signUpData = action.payload

       },
       clearSignUpData : (state)=>{
              state.signUpData = null
       }
    }
});

export const {setSignUpData , clearSignUpData} = authSlice.actions;

export default authSlice.reducer;