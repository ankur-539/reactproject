import { configureStore } from "@reduxjs/toolkit";
import customSlicer from "./ReduxFunctions"

const redStore = configureStore({
    reducer: {
        ankur: customSlicer,
    },
})

export default redStore;