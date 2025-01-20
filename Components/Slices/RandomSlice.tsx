import { createSlice } from "@reduxjs/toolkit";
import getData from "../API/RandomApi";


const RandomApiSlice = createSlice({
    name: 'random',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true;
        })
        .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
        })
        .addCase(getData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
        })
    }
})

export default RandomApiSlice.reducer;