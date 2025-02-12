// import CreatePost from './Screems/createPost';

// import { useState } from 'react'
// import  { useEffect } from 'react';
// import  { useReducer } from 'react';
// import api from './api';

// import { ? } from './types';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Login from './Screens/login';
import AdminPosts from './Screens/adminPosts';
import CreatePost from './Screens/createPost';
import EditPost from './Screens/editPost';
import LandingPage from './Screens/landingPage';
import PasswordRescue from './Screens/passwordRescue';
import Post from './Screens/post';
import PostList from './Screens/postList';
import SignUp from './Screens/signUp';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


function App() {

  return (
    <Router>
      <div>
        {/* <Header /> */}
        <MainContent>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adminPosts" element={<AdminPosts />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/editPost" element={<EditPost />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/post" element={<Post />} />
            <Route path="/passwordRescue" element={<PasswordRescue />} />
            <Route path="/postList" element={<PostList />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </MainContent>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
