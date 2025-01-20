import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('data/fetchData', async() => {

             const response = await fetch('https://emojihub.yurace.pro/api/all/group/plant-flower');
             const data = await response.json();
             const sortedData = data.sort((a: { name: string; },b: { name: string; }) => {
                
                return a.name.localeCompare(b.name);
              });

              //const filtredData = data.filter((item) => item.Group === 'plant flower')
            
              return sortedData;

})



// export default fetchData;