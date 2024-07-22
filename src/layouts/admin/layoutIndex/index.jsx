import { Outlet } from "react-router-dom";
import MovieDashboard from "../../../pages/admin/moviemanagement/MovieDashboard";
import UserManagement from "../../../pages/admin/usermanagement/UserManagement";
import HeaderAdmin from "../header";
import Menu from "../menu";
import "./index.scss";

export default function LayoutIndex()
{
  return (
    <>
      <div className="ra-admin-layout">
        <Menu />
        <div className="right">
          <HeaderAdmin />
          <Outlet />
        </div>
      </div>
    </>
  );
}
