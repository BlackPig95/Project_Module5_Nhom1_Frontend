import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/adminSlices/movieSlice";
import authSlice from "../slices/clientSlices/authSlice";

const store = configureStore({
  reducer: { movie: movieSlice, auth: authSlice },
});
export default store;
