import React from "react";
import MovieDetailPage from "../../../pages/admin/movieDetail/movieDetail";
import MovieDashboard from "../../../pages/admin/moviemanagement/MovieDashboard";
import { useParams } from "react-router-dom";
import FormEditMovie from "../../../components/adminComponents/movie/FormEditMovie";

const Dashboard = React.lazy(() => import("../../../pages/admin/Dashboard"));
const PaymentManagement = React.lazy(() => import("../../../pages/admin/PaymentManagement"));
const TicketManagement = React.lazy(() =>
  import("../../../pages/admin/TicketManagement")
);
const UserManagement = React.lazy(() =>
  import("../../../pages/admin/UserManagement")
);
const privateRoutes = [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/payment-management",
    element: <PaymentManagement />,
  },
  {
    path: "/admin/ticket-management",
    element: <TicketManagement />,
  },
  {
    path: "/admin/user-management",
    element: <UserManagement />,
  },
  {
    path: "/admin/movie-dashboard",
    element: <MovieDashboard />
  },
  {
    path: "admin/movie-detail/:id",
    element: <MovieDetailPage />,
  },
  {
    path: "admin/movie-edit/:id",
    element: <FormEditMovie />
  }
];

export default privateRoutes;