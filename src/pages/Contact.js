// src/pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Help and Feedback Section */}
        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d151c] tracking-light text-[32px] font-bold">
              Help and feedback
            </p>
          </div>
          {/* User Comment */}
          <div className="flex gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={{
                backgroundImage: `url("https://cdn.usegalileo.ai/stability/aced7fbc-99a8-4bc9-9110-3c2b4acc3ef5.png")`,
              }}
            ></div>
            <div className="flex flex-1 flex-col items-stretch gap-2">
              <div className="flex flex-col gap-1">
                <p className="text-[#0d151c] text-base font-bold">Alice</p>
                <p className="text-[#0d151c] text-base font-normal">
                  Hi, I'm a new user of WearCast. I like the app very much, but
                  I have some questions about the function of the app. For
                  example, how can I add my daily wear photos to the app? How do
                  I get more followers? How to add friends? I hope you can give
                  me detailed guidance. I am looking forward to your reply.
                </p>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 p-4">
            <label className="flex flex-col min-w-40 flex-1">
              <textarea
                placeholder="Ask a question or share feedback"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border border-[#cedde8] bg-slate-50 focus:border-[#cedde8] min-h-36 placeholder:text-[#49779c] p-[15px] text-base font-normal"
              ></textarea>
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 p-4">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Email address (optional)"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border border-[#cedde8] bg-slate-50 focus:border-[#cedde8] h-14 placeholder:text-[#49779c] p-[15px] text-base font-normal"
                value=""
              />
            </label>
          </div>
          <div className="flex px-4 py-3 justify-end">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#38a0f5] text-[#0d151c] text-sm font-bold">
              <span className="truncate">Submit</span>
            </button>
          </div>

          {/* FAQ Section */}
          <h3 className="text-[#0d151c] text-lg font-bold px-4 pb-2 pt-4">
            Frequently asked questions
          </h3>
          <div className="flex flex-col p-4 gap-3">
            {/* FAQ Item */}
            <details
              className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#0d151c] text-sm font-medium">
                  How to share wear photos?
                </p>
                <div className="text-[#0d151c] group-open:rotate-180">
                  {/* CaretDown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="text-[#49779c] text-sm font-normal pb-2">
                You can share your daily wear photos by clicking the camera icon
                in the upper right corner of the home page. After taking or
                selecting a photo, you can add a description and post it to the
                community.
              </p>
            </details>
            {/* Repeat similar blocks for other FAQs */}
            <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px]">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#0d151c] text-sm font-medium">
                  How to get more followers?
                </p>
                <div className="text-[#0d151c] group-open:rotate-180">
                  {/* CaretDown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="text-[#49779c] text-sm font-normal pb-2">
                You can share your daily wear photos by clicking the camera icon
                in the upper right corner of the home page. After taking or
                selecting a photo, you can add a description and post it to the
                community.
              </p>
            </details>
            <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px]">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#0d151c] text-sm font-medium">
                  How to add friends?
                </p>
                <div className="text-[#0d151c] group-open:rotate-180">
                  {/* CaretDown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="text-[#49779c] text-sm font-normal pb-2">
                You can share your daily wear photos by clicking the camera icon
                in the upper right corner of the home page. After taking or
                selecting a photo, you can add a description and post it to the
                community.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
