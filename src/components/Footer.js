// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" href="/about">
            About
          </a>
          <a className="footer-link" href="/blog">
            Blog
          </a>
          <a className="footer-link" href="/help">
            Help
          </a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon">
            {/* 간단한 소셜 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="..." />
            </svg>
          </a>
          {/* 다른 소셜 아이콘들도 동일하게 추가 */}
        </div>
        <p className="footer-copy">©2024 WhatToWear</p>
      </div>
    </footer>
  );
};

export default Footer;
