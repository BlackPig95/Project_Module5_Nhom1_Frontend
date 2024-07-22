import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api";
import { HTTP_METHOD } from "../../constants";
import Cookies from "js-cookie";

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async ({ page, search }) =>
  {
    const token = Cookies.get("token");
    if (!token)
    {
      throw new Error("Token not found");
    }

    const response = await BASE_URL[ HTTP_METHOD.GET ](
      `/admin/user-management?page=${ page - 1 }&search=${ search }`,
      {
        headers: {
          Authorization: `Bearer ${ token }`,
        },
      }
    );
    return response.data;
  }
);
