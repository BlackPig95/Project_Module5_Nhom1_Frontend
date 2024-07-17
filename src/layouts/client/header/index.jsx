import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
        <button className="register">Đăng ký</button>
        <button className="login">Đăng nhập</button>
      </div>
    </header>
  );
}
