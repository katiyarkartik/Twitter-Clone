import React from "react";
import "./Settings.css";
import cp from "../images/coverphoto.jpg";
import dp from "../images/dp.jpg";
import { FiSend } from "react-icons/fi";
const Settings = () => {
  return (
    <div >
    <div className="settings" >
      <h2 style={{ textAlign: "center" }}>Settings</h2>
      <div
        className="settings-profile"
        style={{ fontSize: "18px", fontWeight: "700", marginTop: "20px" }}
      >
        <p>Profile Settings</p>
        <div
          className="settings-cover"
          style={{ fontSize: "16px", fontWeight: "300", marginTop: "20px" }}
        >
          <p style={{marginBottom:"10px"}}>Cover Photo</p>
          <img src={cp} alt="" srcset="" />
          <div
            className="dp-edit-box"
            style={{ width: "auto", height: "40px" }}
          >
            <input
              type="text"
              placeholder="Enter New Profile-Picture URL"
              style={{ width: "80%", height: "40px" }}
            />
            <button
              style={{
                width: "40px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              <FiSend />
            </button>
          </div>
        </div>
        <p style={{ fontSize: "16px", fontWeight: "300", marginTop: "20px" , marginBottom:"20px"}}>
          Profile Photo
        </p>
        <div className="settings-profile-pic">
          <img
            src={dp}
            alt=""
            srcset=""
            style={{ width: "100px", height: "100px", borderRadius: "100%" }}
          />
          <div
            className="dp-edit-box"
            style={{ width: "auto", height: "40px" }}
          >
            <input
              type="text"
              placeholder="Enter New Profile-Picture URL"
              style={{ width: "80%", height: "40px" }}
            />
            <button
              style={{
                width: "40px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
      <div
        className="settings-account"
        style={{ fontSize: "18px", fontWeight: "700", marginTop: "20px" }}
      >
        <p style={{textDecoration:"underline", textUnderlineOffset:"5px"}}>Account Settings</p>
        <div
          className="delete-account"
          style={{ fontSize: "16px", fontWeight: "300", marginTop: "20px" }}
        >
        <p>You will not be able to recover your account once you delete it.</p>
          <button style={{width:"100%", height:"40px", borderRadius:"10px", marginTop:"20px", backgroundColor:"red", color:"white", fontWeight:"700", fontSize:"16px", border:"none"}}>Delete Account</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Settings;
