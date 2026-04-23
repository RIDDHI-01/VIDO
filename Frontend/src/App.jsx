import './App.css'
import Authentication from './pages/authentication';
import { AuthProvider } from "./context/authContext.jsx";
import LandingPage from './pages/landing'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Video from './pages/VideoMeet.jsx';
import HomeComponent from './pages/home.jsx';
import History from './pages/history.jsx';

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/:url' element={<Video/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      </AuthProvider>
    </Router>
    </>
  )
}

export default App
