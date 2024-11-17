// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../components/Button.css"

const Home = () => {
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
                <Link to="/signup">
                  <button className="button button-primary">
                    <span className="truncate">시작하기</span>
                  </button>
                </Link>
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

        {/* Today's Weather Section */}
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
          {/* Weather-Based Outfit Recommendations */}
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
        </div>

        {/* Community Posts Section */}
        <h2 className="text-[#0d151c] text-[22px] font-bold">
          Community Posts
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Community Post */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/4f1fc9e5-3d59-454b-9c6e-09694d15dc20.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#0d151c] text-base font-medium">
                @fashionista
              </p>
              <p className="text-[#49779c] text-sm font-normal">
                Loving my sunny day outfit today!
              </p>
              <p className="text-[#49779c] text-sm font-normal">2h</p>
            </div>
          </div>
          {/* Repeat similar blocks for other community posts */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/efa66ab3-befd-41aa-a29a-7cf4761eb30e.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#0d151c] text-base font-medium">
                @adventureswithstyle
              </p>
              <p className="text-[#49779c] text-sm font-normal">
                Rainy day chic: trench coat and boots
              </p>
              <p className="text-[#49779c] text-sm font-normal">1d</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e11d7673-7220-453a-803e-546dc831a253.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#0d151c] text-base font-medium">
                @everydayelegance
              </p>
              <p className="text-[#49779c] text-sm font-normal">
                Casual Friday vibes: jeans and a blazer
              </p>
              <p className="text-[#49779c] text-sm font-normal">3d</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/31e15b04-bcf3-41c5-ba53-04e67eeff353.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#0d151c] text-base font-medium">
                @trendsetter
              </p>
              <p className="text-[#49779c] text-sm font-normal">
                Trend alert: oversized sunglasses and bucket hats
              </p>
              <p className="text-[#49779c] text-sm font-normal">4d</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
