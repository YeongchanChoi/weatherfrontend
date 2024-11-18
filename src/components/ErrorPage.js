// src/components/ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import Swal from 'sweetalert2'; // SweetAlert2 import

const ErrorPage = ({ status }) => {
  React.useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: `${status} 오류`,
      text: "페이지를 찾을 수 없습니다.",
    });
  }, [status]);

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
