import { combineReducers } from "redux";
import likeReducer from '../Slices/Likeslice';
import usersReducer from '../Slices/Usersslice';
import emojiReducer from '../Slices/ApiSlice';
import randomReducer from '../Slices/RandomSlice';
import authReducer from '../Slices/AuthenticationSlice';
import galleryReducer from '../Slices/GallerySlice';

const rootReducer = combineReducers(
    {
        like: likeReducer,
        users: usersReducer,
        emojis: emojiReducer,
        random: randomReducer,
        auth : authReducer,
        gallery : galleryReducer,
    }
)

export default rootReducer;