import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api";
import { HTTP_METHOD } from "../../constants";

export const fetchAllCountries = createAsyncThunk("country/fetchAllCountries",
    async () =>
    {
        const response = await BASE_URL[ HTTP_METHOD.GET ]("countries");
        return response;
    }
);
export const fetchAllGenres = createAsyncThunk("genre/fetchAllGenres",
    async () =>
    {
        const response = await BASE_URL[HTTP_METHOD.GET]("/genres");
        return response.data;
    }
);
export const fetchAllUserAdvices = createAsyncThunk("userAdvices/fetchAllUserAdvices",
    async () =>
    {
        const response = await BASE_URL[ HTTP_METHOD.GET ]("useradvices");
        return response;
    }
);