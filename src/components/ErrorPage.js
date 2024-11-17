// src/components/ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = ({ status }) => {
  return (
    <div className="error-page">
      <h1 className="error-status">{status}</h1>
      <p className="error-message">Oops! Something went wrong.</p>
      <Link to="/">
        <button className="error-button">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
