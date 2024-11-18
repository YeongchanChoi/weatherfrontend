// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { fetchPosts } from "../api"; // 백엔드에서 게시물 가져오는 API
import Swal from 'sweetalert2'; // SweetAlert2 import

const Home = () => {
  const navigate = useNavigate();
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Home 페이지에서 추천 게시물 가져오기 (예: 최근 게시물 중 상위 4개)
    fetchPosts()
      .then((response) => {
        setFeaturedPosts(response.data.slice(0, 4));
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '데이터 로딩 실패',
          text: error.response?.data?.message || "데이터 로딩 실패",
        });
      });
  }, []);

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Hero Section */}
        <div className="container mx-auto">
          <div className="p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/2fbbdf85-4451-4602-bcaf-0d3854d424f9.png")`,
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black">
                  Your personal weather-based wardrobe planner
                </h1>
                <h2 className="text-white text-sm font-normal">
                  Get personalized outfit recommendations based on the current
                  weather. Whether it's sunny or rainy, we've got you covered.
                </h2>
              </div>
              <div className="flex-wrap gap-3 flex">

              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="flex flex-col gap-10 px-4 py-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0d151c] text-4xl font-bold">
                Why WearCast?
              </h1>
              <p className="text-[#0d151c] text-base font-normal">
                Your daily outfit inspiration, rain or shine. We help you look
                and feel your best, every day.
              </p>
            </div>
            <Link to="/about">
              <button className="button button-primary">
                <span className="truncate">Learn more</span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            {/* Feature Card */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/stability/9d6aca80-61b6-457b-a860-f1630e75c1b2.png")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d151c] text-base font-medium">
                  Personalized recommendations
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  Based on the current weather and your personal style
                </p>
              </div>
            </div>
            {/* Repeat similar blocks for other features */}
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/stability/4487d7ff-597c-4976-886a-ee618060685b.png")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d151c] text-base font-medium">
                  Daily outfit inspiration
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  Browse outfit ideas for every season and occasion
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/0df0142f-a02d-447a-84da-c0785e8cad6f.png")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d151c] text-base font-medium">
                  Rainy day outfits
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  Stay dry with stylish outfits for rainy days
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/stability/ca486689-0a5c-42c2-b88e-e2783c3e16a1.png")`,
                }}
              ></div>
              <div>
                <p className="text-[#0d151c] text-base font-medium">
                  Trending styles
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  Discover and shop the latest fashion trends
                </p>
              </div>
            </div>
          </div>
        </div>
{/*
        Today's Weather Section
        <h2 className="text-[#0d151c] text-[22px] font-bold">
          Today's Weather
        </h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
            <p className="text-[#0d151c] text-sm font-medium">Sunny</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
            <p className="text-[#0d151c] text-sm font-medium">65°F</p>
          </div>
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
            <p className="text-[#0d151c] text-sm font-medium">San Francisco</p>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          { Weather-Based Outfit Recommendations }
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/5ad3b3d4-796c-4209-a3dc-edb72819d275.png")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/4f65de71-e60d-496f-8388-d31f255979b0.png")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/2c7ff77a-9357-44ee-9fcc-4eb01a861247.png")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/7f89048a-982b-4ba8-96f7-ebe9dad0838e.png")`,
              }}
            ></div>
          </div>
        </div>*/}

        {/* Community Posts Section */}
        <h2 className="text-[#0d151c] text-[22px] font-bold">
          Community Posts
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Community Post */}
          {featuredPosts.map((post) => (
            <div key={post.id} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer"
                style={{
                  backgroundImage: `url("${post.imageUrl || 'https://via.placeholder.com/150'}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => navigate(`/post/${post.id}`)} // 게시물 상세 페이지로 이동
              ></div>
              <div>
                <p className="text-[#0d151c] text-base font-medium">
                  {post.title}
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  {post.content.substring(0, 50)}...
                </p>
                <p className="text-[#49779c] text-sm font-normal">
                  {new Date(post.createdAt).toLocaleDateString()} 작성
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
