import { createSlice } from "@reduxjs/toolkit";
import GetgalleryData from "../API/GalleryGet";

const GallerySlice = createSlice({

    name : 'gallery',
    initialState : {
        galleryData : [],
        loading : false,
        error : null,
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(GetgalleryData.pending,(state)=>{
            state.loading = true;
        })
        .addCase(GetgalleryData.fulfilled,(state,action)=>{
            //console.log("Data : ",action.payload)
            state.loading = false;
            state.galleryData = action.payload;


            //console.log("Data new: ",state.galleryData);
            
        })
        .addCase(GetgalleryData.rejected,(state,action)=>{
            state.loading = false;
            // state.error = action.error.message;
        })
    }
})

export default GallerySlice.reducer;