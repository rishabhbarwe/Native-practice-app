import { combineReducers } from "redux";
import likeReducer from '../Slices/Likeslice';
import usersReducer from '../Slices/Usersslice';
import emojiReducer from '../Slices/ApiSlice';
import randomReducer from '../Slices/RandomSlice'

const rootReducer = combineReducers(
    {
        like: likeReducer,
        users: usersReducer,
        emojis: emojiReducer,
        random: randomReducer,
    }
)

export default rootReducer;