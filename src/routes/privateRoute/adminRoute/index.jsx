import React from "react";
import MovieDetailPage from "../../../pages/admin/movieDetail/movieDetail";
import MovieDashboard from "../../../pages/admin/moviemanagement/MovieDashboard";
import FormEditMovie from "../../../components/adminComponents/movie/FormEditMovie";
import VoucherManagement from "../../../pages/admin/vouchetManagement/VoucherManagement";
import SeatManagement from "../../../pages/admin/SeatManagement";
import BannerManagement from "../../../pages/admin/bannerManagement/BannerManagement";
import ReviewManagement from "../../../pages/admin/reviewManagement/ReviewManagement";
import RoomManagement from "../../../pages/admin/roomManagement/RoomManagement";

import NewsManagement from "../../../pages/admin/newsManagement/NewsManagement";

import LayoutIndex from "../../../layouts/admin/layoutIndex";

const Dashboard = React.lazy(() => import("../../../pages/admin/Dashboard"));
const PaymentManagement = React.lazy(() =>
  import("../../../pages/admin/PaymentManagement")
);
const TicketManagement = React.lazy(() =>
  import("../../../pages/admin/TicketManagement")
);
const UserManagement = React.lazy(() =>
  import("../../../pages/admin/usermanagement/UserManagement")
);

const privateRoutes = [
  {
    path: "/admin",

    element: <LayoutIndex />,
    children: [
      //Trang layout admin, ai cần nhét component nào vào khu vực quản lý ở giữa thì viết object con vào trong phần này

      {
        path: "movie-dashboard",
        element: <MovieDashboard />,
      },
      {
        path: "movie-detail/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "movie-edit/:id",
        element: <FormEditMovie />,
      },

      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "voucher-management",
        element: <VoucherManagement />,
      },
      {
        path: "news-management",
        element: <NewsManagement />,
      },
      {
        path: "review-management",
        element: <ReviewManagement />,
      },
      {
        path: "banner-management",
        element: <BannerManagement />,
      },
      {
        path: "seat-management",
        element: <SeatManagement />,
      },
      {
        path: "ticket-management",
        element: <TicketManagement />,
      },
      {
        path: "payment-management",
        element: <PaymentManagement />,
      },
    ],
  },
];

export default privateRoutes;
