import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./Login";
import Home from "./pages/Home";
import PhoneSIgnUp from "./pages/PhoneSIgnUp";
import PhoneSignIn from "./pages/PhoneSignIn";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import Chats from "./components/Chats";

function App() {
  const [login, setlogin] = useState(true);
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup-phone" element={<PhoneSIgnUp />}></Route>
          <Route path="/signin" element={<PhoneSignIn />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/nav" element={<Navbar/>}></Route>
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
