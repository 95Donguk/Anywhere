import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/User";
import PlanSlice from "../Reducer/Plan";
import BookSlice from './../Reducer/Book';
import RoomSlice from "../Reducer/Room";

const Store = configureStore({
    reducer:{
        user:UserSlice.reducer,
        plan:PlanSlice.reducer,
        book:BookSlice.reducer,
        room:RoomSlice.reducer,
    }
})
export default Store;