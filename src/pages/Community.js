// src/pages/Community.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom 사용
import { fetchPosts } from "../api";
import Swal from 'sweetalert2'; // SweetAlert2 import
import Button from "../components/Button";

function Community() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지
  const loader = useRef(null); // 로더 참조

  useEffect(() => {
    loadPosts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadPosts = (pageNumber) => {
    fetchPosts()
      .then((response) => {
        const newPosts = response.data.slice((pageNumber - 1) * 6, pageNumber * 6); // 페이지당 6개 게시물
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        if (newPosts.length < 6) {
          setHasMore(false); // 더 이상 불러올 게시물이 없으면
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '게시물 로딩 실패',
          text: error.response?.data?.message || "게시물 로딩 실패",
        });
      });
  };

  // Intersection Observer를 사용한 무한 스크롤
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [hasMore]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      {/* Header는 App.js에서 이미 포함되어 있으므로 생략 */}

      {/* Main Content */}
      <main className="flex-1 px-10 py-5">
        <div className="max-w-5xl mx-auto">
          {/* Title and Description */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold text-gray-900">Community</p>
              <p className="text-sm text-gray-500">
                Get inspired by the latest posts from the WhatToWear community
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
            <Button
              className="button button-primary"
              onClick={() => navigate("/write")} // Write 페이지로 이동
            >
              작성
            </Button>
          </div>

          {/* Post List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full aspect-square bg-gray-200 rounded-xl cursor-pointer"
                  style={{
                    backgroundImage: `url("${post.imageUrl || 'https://via.placeholder.com/150'}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={() => navigate(`/post/${post.id}`)} // 게시물 상세 페이지로 이동
                ></div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    {post.title || '제목 없음'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(post.content || '').substring(0, 50)}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 로더 */}
          {hasMore && (
            <div ref={loader} className="flex justify-center p-4">
              <p>Loading...</p>
            </div>
          )}

          {!hasMore && (
            <div className="flex justify-center p-4">
              <p>더 이상 게시물이 없습니다.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Community;
