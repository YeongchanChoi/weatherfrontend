// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ErrorPage from "./components/ErrorPage";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/write" element={<Write></Write>} />
            <Route path="/edit-profile" element={<EditProfile></EditProfile>} />
            {/* 추가적인 페이지 경로를 여기에 정의 */}
            <Route path="*" element={<ErrorPage status="404" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
