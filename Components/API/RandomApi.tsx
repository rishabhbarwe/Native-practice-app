import { View, Text } from 'react-native'
import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'

const client_id= 'tD_DwDIq5T9V3P0v4dydJswwRJ-O8czZbbFXBo1igmw'

const getData = createAsyncThunk('data/getData', async () =>{
         try{
            const response = await fetch('https://api.unsplash.com/photos/random?count=10',{
                method : 'GET',
                
                headers : {
                    'Authorization' : `Client-ID ${client_id}`
                },
              });
              if(!response.ok){
                throw new Error('Failed to fetch data from Unsplash');
              }
              const data = await response.json();
              if (!data || data.length === 0) {
                throw new Error('No data found');
              }
              return data;
         }catch(e){
            console.error('Error in getData thunk:', e);
         }

         
          

          
    });
   
export default getData