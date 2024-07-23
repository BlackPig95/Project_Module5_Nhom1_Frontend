import React from "react";

import MovieDetailPage from "../../pages/admin/movieDetail/movieDetail";

import MovieDetail from "../../pages/client/movieDetail/MovieDetail";
import HotMovie from "../../pages/client/hotMovieList/HotMovie";


const Home = React.lazy(() => import("../../pages/client/Home"));
// import Home from "../../pages/client/Home";
const Movies = React.lazy(() => import("../../pages/client/Movies"));
// const MoviesDetail = React.lazy(() =>

//   import("../../pages/client/MoviesDetail")
// );

//   import("../../pages/client/movieDetail/MovieDetail")
// );

const Payment = React.lazy(() => import("../../pages/client/Payment"));
const TicketPrice = React.lazy(() => import("../../pages/client/TicketPrice"));

const PageNotFound = React.lazy(() => import("../../pages/PageNotFound"));

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies-detail",
    element: <MovieDetailPage />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/ticket-price",
    element: <TicketPrice />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/movie-hot",
    element: <HotMovie />
  }
];

export default publicRoutes;
