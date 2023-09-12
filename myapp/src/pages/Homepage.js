import React from "react";
import "./Homepage.css";
import { BsStars } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import AddTweet from "../components/AddTweet";
import Tweet from "../components/Tweet";
import { useNavigate } from "react-router-dom";
import konnect from "../images/Konnect.png";
import { Link } from "react-router-dom";
const Homepage = ({ pic, name, phonenumber }) => {
  let navigate = useNavigate();
  async function handlelogout() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }
  return (
    <div className="homepage">
      {/* <div className="home-heading">
        <div className="logo">
          <img src={konnect} alt="Logo" />
        </div>
        <p>
          <Link to="/nav">
            {" "}
            <AiFillAppstore />
          </Link>
        </p>
      </div> */}

      <AddTweet img={pic} name={name} phonenumber={phonenumber} />
      <br />
      <div className="hr-bottom"></div>
      <Tweet />
    </div>
  );
};

export default Homepage;
