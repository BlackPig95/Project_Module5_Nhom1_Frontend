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
export const addMovie = createAsyncThunk("movie/addMovie",
    async (formData) =>
    {
        const response = await BASE_URL[ HTTP_METHOD.POST ]("admin/movies", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
        return response;
    }
);