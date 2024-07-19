import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../slices/clientSlices";

const store = configureStore({
  reducer: rootReducers,
});

export default store;
