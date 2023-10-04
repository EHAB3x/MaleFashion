import { configureStore } from "@reduxjs/toolkit";
import  UserSlice  from "./Slicces/User";

export const store = configureStore({
    reducer:{
        user : UserSlice,
    }
})