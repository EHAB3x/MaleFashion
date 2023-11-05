import { configureStore } from "@reduxjs/toolkit";
import  UserSlice  from "./Slicces/User";
import  CartSlice  from "./Slicces/Cart";

export const store = configureStore({
    reducer:{
        user : UserSlice,
        cart : CartSlice,
    }
})