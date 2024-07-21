import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import RegisterForm from "../../../pages/client/register";
import LoginForm from "../../../pages/client/login";
import ForgotPasswordForm from "../../../pages/client/forgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import Cookies from "js-cookie";
import { logout } from "../../../redux/slices/clientSlices/authSlice";
import { loadUserFromCookie } from "../../../services/clientServices/authService";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const parsedToken = JSON.parse(token);
      dispatch(loadUserFromCookie(parsedToken));
    }
  }, [dispatch]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const openLoginForm = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setShowForgotPasswordForm(false);
  };

  const openRegisterForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    setShowForgotPasswordForm(false);
  };

  const openForgotPasswordForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowForgotPasswordForm(true);
  };

  const closeForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowForgotPasswordForm(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src="path-to-your-logo.png" alt="Logo" />
      </div>
      <div className="header-menu-icon" onClick={toggleMenu}>
        <MenuOutlined />
      </div>
      <nav className={`header-nav ${menuVisible ? "visible" : ""}`}>
        <a href="#" className="nav-item">
          Trang chủ
        </a>
        <a href="#" className="nav-item">
          Lịch chiếu
        </a>
        <a href="#" className="nav-item">
          Tin tức
        </a>
        <a href="#" className="nav-item">
          Khuyến mãi
        </a>
        <a href="#" className="nav-item">
          Giá vé
        </a>
        <a href="#" className="nav-item">
          Liên hoan phim
        </a>
        <a href="#" className="nav-item">
          Giới thiệu
        </a>
      </nav>
      <div className="header-actions">
        {userData ? (
          <>
            <span className="text-white">
              Tên đăng nhập: {userData.fullName}
            </span>
            <Button onClick={handleLogout} type="primary">
              Đăng xuất
            </Button>
          </>
        ) : (
          <>
            <button className="register" onClick={openRegisterForm}>
              Đăng ký
            </button>
            <button className="login" onClick={openLoginForm}>
              Đăng nhập
            </button>
          </>
        )}
      </div>
      {showLoginForm && (
        <LoginForm
          closeForm={closeForm}
          openRegisterForm={openRegisterForm}
          openForgotPasswordForm={openForgotPasswordForm}
        />
      )}
      {showRegisterForm && (
        <RegisterForm closeForm={closeForm} openLoginForm={openLoginForm} />
      )}
      {showForgotPasswordForm && <ForgotPasswordForm closeForm={closeForm} />}
    </header>
  );
}
