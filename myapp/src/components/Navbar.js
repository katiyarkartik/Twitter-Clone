import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineBook,
  AiOutlineUsergroupAdd,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai"; 
import { MdEmojiPeople } from "react-icons/md";
import "./Navbar.css";
import konnect from "../images/Konnect.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
const Navbar = () => {

  const { setActiveComponent } = useAppContext();

  // const handleNavigation = (componentName) => {
  //   setActiveComponent(componentName);
  // }
  
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    console.log(item);
    setActiveItem(item);
    setActiveComponent(item);

  };

  
  let navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  async function logout() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={konnect} alt="Logo" />
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="general">General</div>
      {/* Navigation Items */}
      <div className="nav-items">
        <div
          className={`nav-item ${activeItem === "home" ? "active" : ""}`}
          onClick={() => handleItemClick("home")}
        >
          <AiOutlineHome />
          <span>Home</span>
        </div>

        <div
          className={`nav-item ${activeItem === "messages" ? "active" : ""}`}
          onClick={() => handleItemClick("messages")}
        >
          <AiOutlineMessage />
          <span>Messages</span>
        </div>

        <div
          className={`nav-item ${activeItem === "friends" ? "active" : ""}`}
          onClick={() => handleItemClick("friends")}
        >
          <MdEmojiPeople />
          <span>Friends</span>
        </div>

        <div
          className={`nav-item ${activeItem === "bookmarks" ? "active" : ""}`}
          onClick={() => handleItemClick("bookmarks")}
        >
          <AiOutlineBook />
          <span>Bookmarks</span>
        </div>
        <div
          className={`nav-item ${activeItem === "communities" ? "active" : ""}`}
          onClick={() => handleItemClick("communities")}
        >
          <AiOutlineUsergroupAdd />
          <span>Communities</span>
        </div>
        <div
          className={`nav-item ${
            activeItem === "notifications" ? "active" : ""
          }`}
          onClick={() => handleItemClick("notifications")}
        >
          <AiOutlineBell />
          <span>Notifications</span>
        </div>
        <div
          className={`nav-item ${activeItem === "settings" ? "active" : ""}`}
          onClick={() => handleItemClick("settings")}
        >
          <AiOutlineSetting />
          <span>Settings</span>
        </div>
        <div className="logout-btn" onClick={logout}>
          <div
            className={`nav-item ${activeItem === "logout" ? "active" : ""}`}
            onClick={() => handleItemClick("logout")}
          >
            <AiOutlineLogout />
            <span>Logout</span>
          </div>
        </div>
      </div>
      {/* <div className="tweet-btn">
        <button onClick={logout}>Logout</button>
      </div>

      <div className="userdetails">
        <div className="userImg">
          <img src={userInfo && userInfo.img} alt="" />
        </div>
        <div className="userId">
          <p className="name-user">{userInfo && userInfo.name}</p>
          <p className="name-username">{userInfo.phonenumber}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
