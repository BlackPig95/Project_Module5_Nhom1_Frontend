import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api";
import { HTTP_METHOD } from "../../constants";

export const fetchAllMovies = createAsyncThunk("movie/fetchAllMovies",
    async () =>
    {
        const response = await BASE_URL[ HTTP_METHOD.GET ]("admin/movies");
        return response;
    }
);