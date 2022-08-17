import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left-menu"></div>
        <div className="vl"></div>
        <div className="center"></div>
        <div className="vl"></div>
        <div className="right-menu">
         <div className="search">
          <input type="text" className="search-box mainLoginInput" placeholder="Search.." />
         </div>
         <div className="whats-happening"></div>
         <div className="whotofollow">

         </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
