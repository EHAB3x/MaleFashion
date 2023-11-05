import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    initialState:0,
    name:"CartSlice",
    reducers:{
        cartNumber: (state, action)=>{
            return action.payload
        }
    }
})

export const {cartNumber} = CartSlice.actions;
export default CartSlice.reducer;