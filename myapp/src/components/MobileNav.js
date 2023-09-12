import React from "react";
import konnect from "../images/Konnect.png";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
const MobileNav = () => {
  return (
    <div className="home-heading">
      <div className="logo">
        <img src={konnect} alt="Logo" />
      </div>
      <p>
        <Link to="/nav">
          {" "}
          <AiFillAppstore />
        </Link>
      </p>
    </div>
  );
};

export default MobileNav;
