import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     likes : [{id : 1,text : '0'}]
// }

const likeSLice = createSlice({
    name: 'like',
    initialState: { globalLikeCount: 0,
        },
    reducers: {
        addLike: (state, action) => {
            state.globalLikeCount += 1;
        },
        removeLike: (state, action) => {
            if (state.globalLikeCount > 0) {
                state.globalLikeCount -= 1;
            }
        },
       }
});



export const { addLike, removeLike } = likeSLice.actions;

export default likeSLice.reducer 


