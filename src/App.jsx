import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewAlert from "./pages/NewAlert"
const App = () => {
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newAlert" element={<NewAlert/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App