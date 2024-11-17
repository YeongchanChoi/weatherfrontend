// src/pages/PostDetail.js
import React from "react";

function PostDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 메인 콘텐츠 */}
      <main className="flex-1 px-10 py-5">
        <div className="max-w-5xl mx-auto">
          {/* 제목과 설명 */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-black text-gray-900">
                Today's weather: 70°F and sunny
              </p>
              <p className="text-base text-gray-500">
                What are you wearing today?
              </p>
            </div>
            <button className="h-10 px-4 bg-gray-100 rounded-xl text-sm font-bold text-gray-900">
              Add a photo
            </button>
          </div>

          {/* 이미지 목록 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-xl">
                  {/* 이미지가 여기에 표시됩니다. */}
                </div>
              </div>
            ))}
          </div>

          {/* 게시글 내용 */}
          <p className="text-base text-gray-900 px-4 pb-3">
            Amanda: I'm wearing a blue blouse and white jeans. The temperature
            is perfect for a casual outfit. What are you wearing today?
          </p>

          {/* 액션 버튼들 */}
          <div className="flex gap-4 px-4 py-2">
            {/* 각 버튼에 아이콘과 텍스트 추가 */}
            {[
              { icon: "🔄", text: "23" },
              { icon: "💬", text: "5" },
              { icon: "❤️", text: "24" },
              { icon: "🔖", text: "" },
            ].map((action, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2">
                <span className="text-gray-500">{action.icon}</span>
                {action.text && (
                  <p className="text-sm font-bold text-gray-500">
                    {action.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 댓글 섹션 */}
          <h2 className="text-2xl font-bold text-gray-900 px-4 pb-3 pt-5">
            Comments
          </h2>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-gray-200">
                {/* 프로필 이미지 */}
              </div>
              <div>
                <div className="flex gap-3">
                  <p className="text-sm font-bold text-gray-900">사용자 이름</p>
                  <p className="text-sm text-gray-500">몇 시간 전</p>
                </div>
                <p className="text-sm text-gray-900">댓글 내용</p>
              </div>
            </div>
          ))}

          {/* 댓글 입력창 */}
          <div className="flex items-center px-4 py-3 gap-3">
            <input
              type="text"
              placeholder="Add a comment..."
              className="form-input flex-1 h-12 rounded-xl bg-gray-100 px-4 placeholder-gray-500"
            />
            <button>
              <span className="text-gray-500 bg-slate-600">작성</span>
            </button>
          </div>

          {/* 비디오 섹션 */}
          <div className="mt-5">
            <div className="relative aspect-video bg-gray-200">
              {/* 비디오 플레이어 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostDetail;
