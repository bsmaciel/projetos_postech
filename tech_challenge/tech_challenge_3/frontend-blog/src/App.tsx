import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Footer from './components/Footer'
// import Header from './components/Header'
import MainContent from './components/MainContent'
import AdminPost from './screens/adminPost'
import CreatePost from './screens/createPost'
import EditPost from './screens/editPost'
import LandingPage from './screens/landingPage'
import ListPost from './screens/listPost'
import Login from './screens/login'
import Menu from './screens/menu'
import PasswordReset from './screens/passwordReset'
import SignUp from './screens/signUp'
import ViewPost from './screens/viewPost'

import './App.css'

import SignUpMessage from './components/SignUpMessage'
import PasswordResetMessage from './components/PasswordResetMessage'
import AdminPostsAlert from './components/AdminPostsAlert'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@fortawesome/fontawesome-free/js/all.min.js'

function App() {

  return (
    <Router>
      {/* <Header /> */}
      {/* <div> */}
        <MainContent>
          <Routes>
            <Route path="/adminPost" element={<AdminPost />} />
            <Route path="/adminPostsAlert" element={<AdminPostsAlert />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/editPost" element={<EditPost />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/listPost" element={<ListPost />} />
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/passwordResetMessage" element={<PasswordResetMessage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signUpMessage" element={<SignUpMessage />} />
            <Route path="/viewpost" element={<ViewPost />} />
          </Routes>
        </MainContent>
      {/* </div> */}
      {/* <Footer /> */}
    </Router>
  )
}

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
