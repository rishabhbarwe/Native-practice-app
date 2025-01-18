import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: [
        // Example user object with an `id` property
        /*{ id: 0, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St', image: null },*/
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        addUser: (state, action) => {
            const newUser = { ...action.payload };
            state.users.push(newUser);
        },


        deleteUser: (state, action) => {

            // state.users = state.users.filter(user => user.id !== action.payload.id);
            // state.users.splice(action.payload.index, 1);


            //state.users.splice(action.payload.index-1, 1); // This is the mutation step
            //console.log("Action Payload:", action.payload);
            const index = state.users.findIndex(user => user.id === action.payload.id);
            //console.log(index)
            if (index !== -1) {
                state.users.splice(index, 1);  // Remove user by index found from `id`
            }

        },
    },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
