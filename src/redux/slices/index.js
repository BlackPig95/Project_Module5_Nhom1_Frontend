import { combineReducers } from "redux";
import movieSlice from "./adminSlices/movieSlice";
import countrySlice from "./generalSlices/countrySlice";
import genreSlice from "./generalSlices/genreSlice";
import userAdviceSlice from "./generalSlices/userAdviceSlice";
import userSlice from "./adminSlices/userSlice";

import discountSlice from "./adminSlices/discountSlice";

import seatSlice from "./adminSlices/seatSlice";
import bannerSlice from "./adminSlices/bannerSlice";
import reviewSlice from "./adminSlices/reviewSlice";

import roomSlice from "./adminSlices/roomSlice";
import clientBannerSlice from "./clientSlices/clientBannerSlice";


const rootReducers = combineReducers({
  movie: movieSlice,
  country: countrySlice,
  genre: genreSlice,
  userAdvice: userAdviceSlice,
  user: userSlice,
  discount: discountSlice,
  seat: seatSlice,
  banner: bannerSlice,
  review: reviewSlice,
  room: roomSlice,
  clientBanner: clientBannerSlice,
});
export default rootReducers;
