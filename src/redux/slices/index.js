import { combineReducers } from "redux";
import movieSlice from "./adminSlices/movieSlice";
import countrySlice from "./generalSlices/countrySlice";
import genreSlice from "./generalSlices/genreSlice";
import userAdviceSlice from "./generalSlices/userAdviceSlice";
import userSlice from "./adminSlices/userSlice";
import seatSlice from "./adminSlices/seatSlice";
import bannerSlice from "./adminSlices/bannerSlice";
import reviewSlice from "./adminSlices/reviewSlice";

import roomSlice from "./adminSlices/roomSlice";
import showtimeSlice from "./adminSlices/showtimeSlice";
import { showSeatByRoomId } from "../../services/clientServices/seatClientService";
import seatClientSlice from "./clientSlices/seatClientSlice";

const rootReducers = combineReducers({
  movie: movieSlice,
  country: countrySlice,
  genre: genreSlice,
  userAdvice: userAdviceSlice,
  user: userSlice,
  seat: seatSlice,
  banner: bannerSlice,
  review: reviewSlice,
  room: roomSlice,
  showtime: showtimeSlice,
  showSeatClient: seatClientSlice
});
export default rootReducers;
