import { combineReducers } from "redux";
import likeReducer from '../Slices/Likeslice';
import usersReducer from '../Slices/Usersslice';
import emojiReducer from '../Slices/ApiSlice';

const rootReducer = combineReducers(
    {
        like: likeReducer,
        users: usersReducer,
        emojis : emojiReducer
    }
)

export default rootReducer;