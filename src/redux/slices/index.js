import { combineSlices } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import movieSlice from "./adminSlices/movieSlice";
import countrySlice from "./generalSlices/countrySlice";
import genreSlice from "./generalSlices/genreSlice";
import userAdviceSlice from "./generalSlices/userAdviceSlice";

const rootReducers = combineReducers(
    {
        movie: movieSlice,
        country: countrySlice,
        genre: genreSlice,
        userAdvice: userAdviceSlice,
    }
);
export default rootReducers;