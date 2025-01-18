import { configureStore } from "@reduxjs/toolkit";

import likeReducer from '../Slices/Likeslice'
import rootReducer from "../Slices/RootSLice";

const store = configureStore({
    reducer : rootReducer,
})

export default store