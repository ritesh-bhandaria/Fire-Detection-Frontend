import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewAlert from "./pages/NewAlert"
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Alert from "./pages/Alert";

const App = () => {
  const user = useSelector(state=>state.user.user)
  // useEffect(()=>{
  // },[])
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={user ? <Navigate replace to={'/home'} /> : <Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={user ? <Home /> : <Navigate replace to={'/login'} />} />
          <Route path="/newAlert" element={<NewAlert/>}/>
          <Route path="/alert/:alertId" element={<Alert/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App