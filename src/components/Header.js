// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("로그아웃되었습니다.");
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          {/* 로고 SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#4F46E5" />
            <path d="M10 16L14 20L22 12" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </Link>
        <h1 className="site-title">WhatToWear</h1>
      </div>
      <div className="header-right">
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            홈
          </Link>
          <Link to="/dashboard" className="nav-link">
            대시보드
          </Link>
          <Link to="/community" className="nav-link">
            커뮤니티
          </Link>
        </nav>
        <div className="notification-button">
          {/* 알림 버튼 */}
          <button className="notification-icon">
            {/* 종 모양 SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22Z"
                fill="#FFFFFF"
              />
              <path
                d="M18 16V11C18 7.68629 16.2091 4.81371 13 4.17157V4C13 3.44771 12.5523 3 12 3C11.4477 3 11 3.44771 11 4V4.17157C7.79086 4.81371 6 7.68629 6 11V16L4 18V19H20V18L18 16Z"
                fill="#FFFFFF"
              />
            </svg>
          </button>
          <span className="notification-badge">3</span>
        </div>
        <div className="auth-buttons">
          {user ? (
            <button onClick={handleLogout} className="auth-button login-button">
              로그아웃
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="auth-button signup-button">가입</button>
              </Link>
              <Link to="/login">
                <button className="auth-button login-button">로그인</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
