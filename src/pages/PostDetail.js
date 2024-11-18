// src/pages/PostDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById, fetchCommentsByPostId, createComment } from "../api"; // api.js에서 함수들 임포트
import Swal from 'sweetalert2'; // SweetAlert2 import

const PostDetail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    // 게시물 가져오기
    fetchPostById(id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '게시물 로딩 실패',
          text: error.response?.data?.message || "게시물 로딩 실패",
        });
      });

    // 댓글 가져오기
    fetchCommentsByPostId(id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '댓글 로딩 실패',
          text: error.response?.data?.message || "댓글 로딩 실패",
        });
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: '로그인이 필요합니다.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (!commentContent.trim()) {
      Swal.fire({
        icon: 'error',
        title: '댓글 작성 오류',
        text: "공백은 제출할 수 없습니다.",
      });
      return;
    }

    const data = {
      content: commentContent,
      user: {
        id: user.id, // 사용자 ID만 포함
      },
      post: {
        id: parseInt(id), // 게시물 ID 포함
      },
    };

    createComment(data)
      .then((response) => {
        setCommentContent("");
        setComments((prevComments) => [...prevComments, response.data]);
        Swal.fire({
          icon: 'success',
          title: '댓글 작성 완료',
          text: "댓글이 작성되었습니다.",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '댓글 작성 실패',
          text: error.response?.data?.message || "댓글 작성 실패",
        });
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Main Content */}
      <main className="flex-1 px-10 py-5">
        <div className="max-w-5xl mx-auto">
          {/* 제목과 설명 */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-black text-gray-900">{post.title}</p>
              <p className="text-sm text-gray-500">{post.content}</p>
            </div>
          </div>

          {/* 이미지 표시 */}
          {post.imageUrl && (
            <div className="p-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto rounded-xl"
              />
            </div>
          )}

          {/* 게시글 작성자 정보 */}
          <p className="text-sm text-gray-500 px-4 pb-3">
            By: {post.user.email}
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
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-gray-200">
                {/* 프로필 이미지 (추가 구현 가능) */}
              </div>
              <div>
                <div className="flex gap-3">
                  <p className="text-sm font-bold text-gray-900">
                    {comment.user.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-gray-900">{comment.content}</p>
              </div>
            </div>
          ))}

          {/* 댓글 입력창 */}
          <div className="flex items-center px-4 py-3 gap-3">
            <input
              type="text"
              placeholder="Add a comment..."
              required
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className="form-input flex-1 h-12 rounded-xl bg-gray-100 px-4 placeholder-gray-500"
            />
            <button onClick={handleCommentSubmit} className="text-gray-500">
              😊
            </button>
          </div>

          {/* 비디오 섹션 (추가 구현 가능) */}
          <div className="mt-5">
            <div className="relative aspect-video bg-gray-200">
              {/* 비디오 플레이어 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;
