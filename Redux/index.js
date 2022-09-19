import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ResultSlicer from "./Slicer/ResultTip";

export default store = configureStore({
    reducer : {
        Result : ResultSlicer
    }, middleware : [thunk]
})