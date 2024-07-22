import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api";
import { HTTP_METHOD } from "../../constants";

export const fetchAllRooms = createAsyncThunk("room/fetchAllRooms",
    async ({ page }) =>
    {
        const response = await BASE_URL[ HTTP_METHOD.GET ](`admin/rooms?page=${ page - 1 }`);
        return response;
    }
);