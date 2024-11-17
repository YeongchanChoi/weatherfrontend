// src/pages/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedStyles, setSelectedStyles] = useState([]);

  const styles = [
    "Vintage",
    "Minimal",
    "Casual",
    "Business Casual",
    "Business",
    "Street",
    "Classic",
  ];

  const toggleStyle = (style) => {
    setSelectedStyles((prevSelectedStyles) =>
      prevSelectedStyles.includes(style)
        ? prevSelectedStyles.filter((s) => s !== style)
        : [...prevSelectedStyles, style]
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      preferredStyles: selectedStyles,
    };
    signup(data)
      .then((response) => {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response?.data?.message || "회원가입 실패");
      });
  };

  return (
    <div className="flex items-center justify-center bg-slate-50 min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sign up for WhatToWear
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          {/* Preferred Styles */}
          <div>
            <label className="block text-gray-700 mb-2">Preferred Styles</label>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleStyle(style)}
                  className={`px-4 py-2 rounded-xl ${
                    selectedStyles.includes(style)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="button button-primary">
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
