import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./Login";
import Home from "./pages/Home";
function App() {
  const [login, setlogin] = useState(true);
  return (
    <Router>
      <div className="App">
      {/* <Navbar/> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
