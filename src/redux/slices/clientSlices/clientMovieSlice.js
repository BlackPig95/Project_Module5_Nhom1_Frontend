import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUS } from "../../../constants";
import { fetchClientMovies } from "../../../services/clientServices/clientMovieService";

const initialState =
{
    loading: LOAD_STATUS.IDLE,
    data: [],
    error: null,
};
const clientMovieSlice = createSlice({
    name: "clientMovieSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder.addCase(fetchClientMovies.pending, state =>
        {
            state.loading = LOAD_STATUS.PENDING;
        }
        );
        builder.addCase(fetchClientMovies.fulfilled, (state, action) =>
        {
            state.loading = LOAD_STATUS.FULLFILLED;
            state.data = action.payload;
        });
        builder.addCase(fetchClientMovies.rejected, (state, action) =>
        {
            state.loading = LOAD_STATUS.REJECTED;
            state.data = action.payload;
        });
    }
});
export default clientMovieSlice.reducer;