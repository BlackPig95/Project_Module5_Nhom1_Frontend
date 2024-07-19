import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../api/client";
import { POST } from "../../constants/httpMethod";
import { notification } from "antd";
import Cookies from "js-cookie";
export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    console.log(user);
    const response = await BASE_URL[POST]("auth/login", user);
    // const cookie = new Cookies();

    new Cookies.set("token", JSON.stringify(response.data), {
      expires: 1 / 24 / 60,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    notification.error({
      message: "Thất bại",
      description: "Đăng nhập thất bại.",
    });
  }
});

export const loadUserFromCookie = createAsyncThunk(
  "auth/loadUserFromCookie",
  async (userData) => {
    return userData;
  }
);
