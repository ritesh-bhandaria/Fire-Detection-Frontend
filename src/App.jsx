import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing"
import Login from "./pages/login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewAlert from "./pages/NewAlert"
import {useSelector} from 'react-redux'
import { useEffect } from "react";

const App = () => {
  const user = useSelector(state=>state.user)
  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={user.user ? <Home /> : <Navigate replace to={'/login'} />} />
          <Route path="/newAlert" element={<NewAlert/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App