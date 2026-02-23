import { configureStore } from "@reduxjs/toolkit";
import customSlicer from "./ReduxFunctions"

export const redStore = configureStore({
    reducer: {
        ankur: customSlicer,
    },
})