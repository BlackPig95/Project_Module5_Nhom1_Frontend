import axios from "axios";

const BASE_URL = axios.create({
  baseURL: `${ import.meta.env.VITE_HOST }:${ import.meta.env.VITE_PORT }/api/v1`,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default BASE_URL;
