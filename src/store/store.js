import { configureStore } from "@reduxjs/toolkit";

// redux store setup
export const store = configureStore({
    reducer: {
        // auth reducer 
        auth: "",
    }
})