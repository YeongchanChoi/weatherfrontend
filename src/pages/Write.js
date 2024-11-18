// src/pages/write.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api"; // 백엔드 API 호출 함수
import Swal from 'sweetalert2';
import Button from '../components/Button'; // Button 컴포넌트 임포트

const Write = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  if (!user) {
    Swal.fire({
      icon: 'warning',
      title: '로그인이 필요합니다.',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate("/login");
    });
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWrite = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        user: {
          id: user.id,
        },
      };
      await createPost(postData);
      Swal.fire({
        icon: 'success',
        title: '작성 완료',
        text: "게시물이 작성되었습니다.",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '작성 실패',
        text: error.response?.data?.message || "게시물 작성에 실패했습니다.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleWrite} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">게시물 작성</h2>
        <div className="mb-4">
          <label className="block text-gray-700">제목</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">내용</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">이미지 URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <Button type="submit">작성하기</Button>
      </form>
    </div>
  );
};

export default Write;
