// src/pages/Community.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // If you're using react-router-dom for navigation
import { fetchPosts } from "../api";

function Community() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        alert(error.response?.data?.message || "게시물 로딩 실패");
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1 px-10 py-5">
        <div className="max-w-5xl mx-auto">
          {/* Title and Description */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold text-gray-900">Community</p>
              <p className="text-sm text-gray-500">
                Get inspired by the latest posts from the FashFusion community
              </p>
            </div>
          </div>

          {/* Categories and Write Button */}
          <div className="flex items-center justify-between p-3">
            <div className="flex gap-3 flex-wrap">
              {["All", "Trending", "New", "Men", "Women", "Unisex"].map(
                (category) => (
                  <button
                    key={category}
                    className="h-8 px-4 bg-gray-100 rounded-xl text-sm font-medium text-gray-900"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <button
              className="button button-primary"
              onClick={() => navigate("/write")} // Navigate to the Write page
            >
              작성
            </button>
          </div>

          {/* Post List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div className="w-full aspect-square bg-gray-200 rounded-xl">
                  {/* Image goes here */}
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    User Name
                  </p>
                  <p className="text-sm text-gray-500">Location Info</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Community;
