import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AdminPost from './Screens/adminPost';
import CreatePost from './Screens/createPost';
import EditPost from './Screens/editPost';
import LandingPage from './Screens/landingPage';
import ListPost from './Screens/listPost';
import Login from './Screens/login';
import PasswordReset from './Screens/passwordReset';
import Post from './Screens/post';
import SignUp from './Screens/signUp';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


function App() {

  return (
    <Router>
      <div>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adminPost" element={<AdminPost />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/editPost" element={<EditPost />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/post" element={<Post />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/listPost" element={<ListPost />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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