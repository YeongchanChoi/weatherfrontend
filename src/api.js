// src/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// 사용자 API
export const signup = (userData) =>
  axios.post(`${API_BASE_URL}/auth/signup`, userData);
export const login = (loginData) =>
  axios.post(`${API_BASE_URL}/auth/login`, loginData);

// 게시물 API
export const fetchPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const fetchPostById = (id) => axios.get(`${API_BASE_URL}/posts/${id}`);
export const createPost = (postData) =>
  axios.post(`${API_BASE_URL}/posts`, postData);

// 댓글 API
export const fetchCommentsByPostId = (postId) =>
  axios.get(`${API_BASE_URL}/comments/post/${postId}`);
export const createComment = (commentData) =>
  axios.post(`${API_BASE_URL}/comments`, commentData);
