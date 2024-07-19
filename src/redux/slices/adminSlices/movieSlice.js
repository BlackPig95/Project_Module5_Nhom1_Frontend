import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../../constants";
import { addMovie, fetchAllMovies } from "../../../services/adminServices/movieServices";
const initialState = {
    loading: LOAD_STATUS.IDLE,
    data: [],
    error: null
};
const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder.addCase(fetchAllMovies.pending, (state) =>
        {
            state.loading = LOAD_STATUS.PENDING;
        });
        builder.addCase(fetchAllMovies.fulfilled, (state, action) =>
        {
            state.loading = LOAD_STATUS.FULLFILLED;
            state.data = action.payload;
        });
        builder.addCase(fetchAllMovies.rejected, (state, action) =>
        {
            state.loading = LOAD_STATUS.REJECTED;
            state.error = action.error.message;
        });
        builder.addCase(addMovie.fulfilled, (state, action) =>
        {
            state.loading = LOAD_STATUS.FULLFILLED;
            state.data = action.payload;
        });
        builder.addCase(addMovie.rejected, (state, action) =>
        {
            state.loading = LOAD_STATUS.REJECTED;
            state.error = action.error.message;
        });
    }
});
export default movieSlice.reducer;