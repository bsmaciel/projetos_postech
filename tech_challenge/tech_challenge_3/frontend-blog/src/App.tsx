import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Footer from './components/Footer'
// import Header from './components/Header'
import MainContent from './components/MainContent'
import AdminPost from './Screens/adminPost'
import CreatePost from './Screens/createPost'
import EditPost from './Screens/editPost'
import LandingPage from './Screens/landingPage'
import ListPost from './Screens/listPost'
import Login from './Screens/login'
import PasswordReset from './Screens/passwordReset'
import SignUp from './Screens/signUp'
import ViewPost from './Screens/viewPost'

<<<<<<< HEAD
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'
=======
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
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)


function App() {

  return (
    <Router>
      {/* <Header /> */}
      <div>
<<<<<<< HEAD
=======
        {/* <Header /> */}
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)
        <MainContent>
          <Routes>
            <Route path="/adminPost" element={<AdminPost />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/editPost" element={<EditPost />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/listPost" element={<ListPost />} />
            <Route path="/" element={<Login />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/viewpost" element={<ViewPost />} />
          </Routes>
        </MainContent>
<<<<<<< HEAD
=======
        {/* <Footer /> */}
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

<<<<<<< HEAD
export default App

/*   return (
    <>
      <Header />
      <MainContent>
        <Login />
      </MainContent>
      <Footer />
    </>
  )
}   */
=======
export default App;
>>>>>>> 82e33fd (Desenvolvimento do layout do Tech Challeng, styled-components e display flex)
