import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./featurs/alert";
import { userSlice } from "./featurs/userSlice";
export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user:userSlice.reducer
    }
})