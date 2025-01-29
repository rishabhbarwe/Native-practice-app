import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const url = 'https://clubnet.app/dev_node/api/galleryGet'

const GetgalleryData = createAsyncThunk('gallery/GetgalleryData', async ()=>{
    try{
        const response = await fetch(url,{
            method : 'post',
            headers : {
                'content-Type' : 'application/json',
            },
            body : JSON.stringify({
                "company_id": 240,
                 "user_id": 322
            })
        });
        
        if(!response.ok){
            throw new Error("Status error");
        }  
        //console.log(response)
        const gallery = await response.json();
        console.log(gallery);
        return gallery;

    }catch(e){
         console.log("Error while posting data in axios : ",e);
    }
})




export default GetgalleryData;