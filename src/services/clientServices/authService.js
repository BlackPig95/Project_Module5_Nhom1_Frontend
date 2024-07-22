import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
import { HTTP_METHOD } from "../../constants";
import BASE_URL from "../../api";
import Cookies from "js-cookie";
export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    console.log(user);
    const response = await BASE_URL[HTTP_METHOD.POST]("auth/login", user);

    Cookies.set("token", response.data?.accessToken, {
      expires: 1, // 1 day
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    notification.error({
      message: "Thất bại",
      description: "Đăng nhập thất bại.",
    });
    throw err;
  }
});

export const loadUserFromCookie = createAsyncThunk(
  "auth/loadUserFromCookie",
  async (userData) => {
    return userData;
  }
);
