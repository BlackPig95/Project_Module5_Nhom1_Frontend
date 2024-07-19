import { combineReducers } from "redux";
import authSlice from "./authSlice";

//abc
const rootReducers = combineReducers({
  auth: authSlice,
});
export default rootReducers;
