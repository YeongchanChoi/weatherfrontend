// src/pages/Write.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api"; // api.js에서 createPost 함수 임포트

function Write() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!user) {
    navigate("/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      user,
    };

    createPost(data)
      .then((response) => {
        alert("게시물이 작성되었습니다.");
        navigate("/community");
      })
      .catch((error) => {
        alert(error.response?.data?.message || "게시물 작성 실패");
      });
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1 px-10 py-5">
        <div className="max-w-5xl mx-auto">
          {/* Title and Description */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold text-gray-900">Write a Post</p>
              <p className="text-sm text-gray-500">
                Share your style with the FashFusion community
              </p>
            </div>
          </div>

          {/* Post Form */}
          <form className="p-4 space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your post title"
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                rows="6"
                placeholder="Write your post content here..."
              ></textarea>
            </div>

            {/* Style Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Style
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
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

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                className="mt-1 w-full text-sm text-gray-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                type="submit"
                className="button button-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Write;
