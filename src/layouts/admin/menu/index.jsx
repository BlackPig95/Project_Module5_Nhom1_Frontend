import {
  DashboardOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

export default function Menu() {
  return (
    <>
      <menu className="ra-admin-menu">
        <Link to="/admin" className="logo">
          <img className="image" src="/logo.png" alt="" />
        </Link>
        <div className="navlinks">
          <NavLink end className="link" to="/admin">
            <DashboardOutlined />
            <span>Tổng quan</span>
          </NavLink>
          <NavLink className="link" to="/admin/student">
            <UserOutlined />
            <span>Sinh viên</span>
          </NavLink>
          <NavLink className="link" to="/admin/report">
            <PieChartOutlined />
            <span> Báo cáo</span>
          </NavLink>
        </div>
      </menu>
    </>
  );
}
