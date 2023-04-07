// import React from "react";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Landing from "./pages/landing";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react'
import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewAlert from "./pages/NewAlert"
const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
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