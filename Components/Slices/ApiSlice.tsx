import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../API/EmojiApi";


const emojisSlice = createSlice({
    name : 'emojis',
    initialState : {
        data : null,
        loading : false,
        error : null,
    },
    reducers : {},
    extraReducers : (builder) => {
            builder
            .addCase(fetchData.pending, (state)=>{
                  state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state,action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },

});

export default emojisSlice.reducer;