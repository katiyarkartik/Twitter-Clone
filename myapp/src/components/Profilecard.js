import React from "react";
import cover from "../images/coverphoto.jpg";
import dp from "../images/dp.jpg";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import "./Profilecard.css";
const Profilecard = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  let navigate = useNavigate();
  async function handlelogout() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }
  return (
    <div>
      <div className="profile-settings">
        <div class="cover-photo">
          <img src={cover} alt="" />
          <div class="profile-photo">
            <img src={userInfo && userInfo.img} alt="" srcset="" />
          </div>
        </div>
        <div className="user-name">{userInfo.name}</div>
        <div className="userid">{userInfo.phonenumber}</div>
        <div className="banner-info">
          <div className="posts banner-info-comp">
            1.64K <span>Following</span>
          </div>
          <div className="followers banner-info-comp">
            5.2M <span>Followers</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="change-info">
          <BiEditAlt /> change info
        </div>
      </div>
      <div className="sgp">
        <div className="suggestion-heading">
          <div className="suggested-people">Suggested People</div>
          <div className="view-all">View all</div>
        </div>
        <div className="people-profiles">
          {/* user 1*/}
          <div className="user-1">
            <div className="user-1-details">
              <div className="user-1-pic">
                <img src="" alt="" />
              </div>
              <div className="user-info-name-id">
                <p className="user-info-name">James Anderson</p>
                <p className="user-info-id">@jamesanderson</p>
              </div>
            </div>
            <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
          </div>
          {/* user 1*/}
          <div className="user-1">
            <div className="user-1-details">
              <div className="user-1-pic">
                <img src="" alt="" />
              </div>
              <div className="user-info-name-id">
                <p className="user-info-name">James Anderson</p>
                <p className="user-info-id">@jamesanderson</p>
              </div>
            </div>
            <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
          </div>{" "}
          <div className="user-1">
            <div className="user-1-details">
              <div className="user-1-pic">
                <img src="" alt="" />
              </div>
              <div className="user-info-name-id">
                <p className="user-info-name">James Anderson</p>
                <p className="user-info-id">@jamesanderson</p>
              </div>
            </div>
            <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
          </div>
        </div>
        {/* <div className="suggestion-heading">
          <div className="suggested-people">Suggested Communities</div>
          <div className="view-all">View all</div>
        </div> */}
        <div className="user-1">
          <div className="user-1-details">
            <div className="user-1-pic">
              <img src="" alt="" />
            </div>
            <div className="user-info-name-id">
              <p className="user-info-name">James Anderson</p>
              <p className="user-info-id">@jamesanderson</p>
            </div>
          </div>
          <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
        </div>
        <div className="user-1">
          <div className="user-1-details">
            <div className="user-1-pic">
              <img src="" alt="" />
            </div>
            <div className="user-info-name-id">
              <p className="user-info-name">James Anderson</p>
              <p className="user-info-id">@jamesanderson</p>
            </div>
          </div>
          <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
        </div>
        <div className="user-1">
          <div className="user-1-details">
            <div className="user-1-pic">
              <img src="" alt="" />
            </div>
            <div className="user-info-name-id">
              <p className="user-info-name">James Anderson</p>
              <p className="user-info-id">@jamesanderson</p>
            </div>
          </div>
          <div className="follow-btn">{/* <GrAddCircle /> */}+</div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
