import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api";
import { HTTP_METHOD } from "../../constants";

export const fetchClientMovies = createAsyncThunk("clientMovie/fetchClientMovies",
    async () =>
    {
        const response = BASE_URL[ HTTP_METHOD.GET ](`movies`);
        return response;
    });