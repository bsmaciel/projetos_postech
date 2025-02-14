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

import './App.css'

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
