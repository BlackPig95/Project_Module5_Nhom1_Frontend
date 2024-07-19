import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/adminSlices/movieSlice";

const store = configureStore(
    {
        reducer: { movie: movieSlice },
    }
);
export default store;