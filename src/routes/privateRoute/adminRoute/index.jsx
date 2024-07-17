import React from "react";

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
];

export default privateRoutes;