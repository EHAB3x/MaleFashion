import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    initialState:[],
    name:'UserSlice',
    reducers:{
        addUser:(state, action)=>{
            return { ...action.payload}
        },
        removeUser:()=>{return[]}
    }
})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;