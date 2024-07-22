import React from "react";
import MovieDetailPage from "../../../pages/admin/movieDetail/movieDetail";
import MovieDashboard from "../../../pages/admin/moviemanagement/MovieDashboard";
import { useParams } from "react-router-dom";
import FormEditMovie from "../../../components/adminComponents/movie/FormEditMovie";
import RoomManagement from "../../../pages/admin/roomManagement/RoomManagement";

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
    element: <Dashboard />,
    children: [ //Trang layout admin, ai cần nhét component nào vào khu vực quản lý ở giữa thì viết object con vào trong phần này
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
        path: "room-dashboard",
        element: <RoomManagement />,
      },
    ]
  },
  {
    path: "/admin/payment-management",
    element: <PaymentManagement />,
  },
  {
    path: "/admin/ticket-management",
    element: <TicketManagement />,
  },



];

export default privateRoutes;
