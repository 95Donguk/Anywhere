import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/User";

const Store = configureStore({
    reducer:{
        user:UserSlice.reducer,
    }
})
export default Store;