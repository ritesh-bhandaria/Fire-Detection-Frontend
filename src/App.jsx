import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewAlert from "./pages/NewAlert"
import {useSelector} from 'react-redux'
import Login from "./pages/Login";
import Alert from "./pages/Alert";

const App = () => {
  const user = useSelector(state=>state.user.user)

  return (
    <div className="relative m-0 min-h-[53vh]" >
      <Router>
      <Navbar />
      <div className="relative m-0 min-h-[60vh]">
        <Routes>
          <Route path="/" element={user ? <Navigate replace to={'/home'} /> : <Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={user ? <Home /> : <Navigate replace to={'/login'} />} />
          <Route path="/newAlert" element={<NewAlert/>}/>
          <Route path="/alert/:alertId" element={<Alert/>}/>
        </Routes>
      </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App