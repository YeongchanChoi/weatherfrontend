// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex"></div>
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Greeting and Profile */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111518] tracking-light text-[32px] font-bold">
            Good morning, Samantha
          </p>
          <Link to="/edit-profile">
            <button className="button button-primary">
              <span className="truncate">Edit Profile</span>
            </button>
          </Link>
        </div>

        {/* Today's Weather */}
        <h2 className="text-[#111518] text-[22px] font-bold px-4 pb-3 pt-5">
          Today's Weather
        </h2>
        <h3 className="text-[#111518] text-2xl font-bold px-4 text-left pb-2 pt-5">
          Sunny, 75°F in San Francisco
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Morning Weather */}
          <div className="flex flex-col gap-3 text-center pb-3">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/stability/e3655445-5de6-4f23-a286-44dc6b5774d3.png")`,
                }}
              ></div>
            </div>
            <div>
              <p className="text-[#111518] text-base font-medium">Morning</p>
              <p className="text-[#60778a] text-sm font-normal">72°F</p>
            </div>
          </div>
          {/* Afternoon Weather */}
          <div className="flex flex-col gap-3 text-center pb-3">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/stability/46e77ebe-7bee-4e38-951b-14655d99403d.png")`,
                }}
              ></div>
            </div>
            <div>
              <p className="text-[#111518] text-base font-medium">Afternoon</p>
              <p className="text-[#60778a] text-sm font-normal">76°F</p>
            </div>
          </div>
          {/* Evening Weather */}
          <div className="flex flex-col gap-3 text-center pb-3">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                style={{
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/a2aa8b34-c7cb-40bf-848d-b186918fa7a5.png")`,
                }}
              ></div>
            </div>
            <div>
              <p className="text-[#111518] text-base font-medium">Evening</p>
              <p className="text-[#60778a] text-sm font-normal">70°F</p>
            </div>
          </div>
        </div>

        {/* Your Daily Outfit */}
        <h2 className="text-[#111518] text-[22px] font-bold px-4 pb-3 pt-5">
          Your Daily Outfit
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Daily Outfit Card */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/216ccf1b-a289-41c4-ba14-989722ae3f03.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Monday</p>
              <p className="text-[#60778a] text-sm font-normal">72°F</p>
            </div>
          </div>
          {/* Repeat similar blocks for other days */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/88c1b4c1-3b2b-4142-b422-84225da49c83.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Tuesday</p>
              <p className="text-[#60778a] text-sm font-normal">74°F</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/a2f0c9af-8621-4fd5-96c7-0773065aa9ab.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Wednesday</p>
              <p className="text-[#60778a] text-sm font-normal">75°F</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/55fb410e-ce89-4950-a6c0-15c8a060b94d.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Thursday</p>
              <p className="text-[#60778a] text-sm font-normal">76°F</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/168d3d09-2db4-4f5c-8c73-cbe7676044ea.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Friday</p>
              <p className="text-[#60778a] text-sm font-normal">77°F</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/230198f2-4033-4760-9049-aa1e44b80187.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Saturday</p>
              <p className="text-[#60778a] text-sm font-normal">78°F</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/68284c97-7cd7-43a6-b628-85cee150a871.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">Sunday</p>
              <p className="text-[#60778a] text-sm font-normal">79°F</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <h2 className="text-[#111518] text-[22px] font-bold px-4 pb-3 pt-5">
          Recent Activity
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Activity Card */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/f8ed59f3-6827-484a-9f22-b61390982cbf.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @mattwilson
              </p>
              <p className="text-[#60778a] text-sm font-normal">2h ago</p>
            </div>
          </div>
          {/* Repeat similar blocks for other activities */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/8bf2f822-d506-4b6a-af69-084adba3eeae.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @samanthasmith
              </p>
              <p className="text-[#60778a] text-sm font-normal">3h ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/265f2cf2-1040-4743-9b39-a6b8dddb09b8.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @laurabrown
              </p>
              <p className="text-[#60778a] text-sm font-normal">4h ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/d8802da0-6e12-4911-a0d1-0e7b9a19d4a2.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @chrisroberts
              </p>
              <p className="text-[#60778a] text-sm font-normal">5h ago</p>
            </div>
          </div>
        </div>

        {/* Community Posts */}
        <h2 className="text-[#111518] text-[22px] font-bold px-4 pb-3 pt-5">
          Community Posts
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Community Post Card */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/5577143f-3c51-4e7d-af84-00b89f9ef379.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @mattwilson
              </p>
              <p className="text-[#60778a] text-sm font-normal">2h ago</p>
            </div>
          </div>
          {/* Repeat similar blocks for other community posts */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/927a1b61-a39d-4461-9e37-044b38937cec.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @samanthasmith
              </p>
              <p className="text-[#60778a] text-sm font-normal">3h ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/4a8c9ddd-a0b7-4c89-be67-ecfd7c304b0d.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @laurabrown
              </p>
              <p className="text-[#60778a] text-sm font-normal">4h ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/109ff1fc-f102-47ac-8f2d-e1fd0b591bf0.png")`,
              }}
            ></div>
            <div>
              <p className="text-[#111518] text-base font-medium">
                @chrisroberts
              </p>
              <p className="text-[#60778a] text-sm font-normal">5h ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
