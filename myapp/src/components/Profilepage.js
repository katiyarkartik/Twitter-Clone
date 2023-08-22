import React from "react";
import "./Profilepage.css";
import coverimg from "../images/coverphoto.jpg"
const Profilepage = () => {
  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <div className="profile-page-cover-photo">
            <img src={coverimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
