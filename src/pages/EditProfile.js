// src/pages/EditProfile.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const EditProfile = () => {
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
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#111518] tracking-light text-[32px] font-bold">
            Edit Profile
          </h1>
          <Link to="/dashboard">
            <Button className="button button-primary">
              <span className="truncate">Back</span>
            </Button>
          </Link>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 p-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-[#111518] text-base font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-[#ccc] rounded-xl p-3 focus:outline-none focus:border-[#111518]"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[#111518] text-base font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-[#ccc] rounded-xl p-3 focus:outline-none focus:border-[#111518]"
              placeholder="Enter your email address"
            />
          </div>

          {/* Preferred Styles */}
          <div className="flex flex-col">
            <label className="text-[#111518] text-base font-medium mb-2">
              Preferred Styles
            </label>
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

          <Button
            type="submit"
            className="mt-4 h-12 px-6 bg-[#111518] text-white text-base font-medium rounded-xl hover:bg-[#000]"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
