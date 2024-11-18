// src/pages/signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api"; // 백엔드 API 호출 함수
import Swal from 'sweetalert2';
import Button from '../components/Button'; // Button 컴포넌트 임포트

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      localStorage.setItem("user", JSON.stringify(response.data));
      Swal.fire({
        icon: 'success',
        title: '가입 성공',
        text: "환영합니다!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '가입 실패',
        text: error.response?.data?.message || "가입에 실패했습니다.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>
        <div className="mb-4">
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <Button type="submit">가입하기</Button>
      </form>
    </div>
  );
};

export default Signup;
