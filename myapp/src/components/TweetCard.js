import React, { useState } from "react";
import "./TweetCard.css";
import { BsSuitHeart, BsBookmarkDash } from "react-icons/bs";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Com from "./Com";

const TweetCard = ({ name, phonenumber, img, tweet, addimgUrl, date }) => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  
  
  // const handleDelete = async () => {
  //   console.log(phonenumber , date)
  //   if (window.confirm("Are you sure you want to delete this tweet?")) {
  //     try {
  //       const response = await fetch(`/deletetweet`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ phonenumber, date }),
  //       });

  //       if (response.status === 200) {
  //         // Reload the page or update the tweet list to reflect the deleted tweet
  //         window.location.reload();
  //       } else {
  //         const responseText = await response.text(); // Get the response as text
  //         console.error("Error deleting tweet:", responseText);
  //         alert("An error occurred while deleting the tweet");
  //       }
  //     } catch (error) {
  //       console.error("Error deleting tweet:", error);
  //       alert("An error occurred while deleting the tweet");
  //     }
  //   }
  // };


  const handleDelete = () => {
  
}


  console.log(userInfo.phonenumber, phonenumber);
  const renderDeleteOption = () => {
    if (userInfo.phonenumber === phonenumber) {
      return (
        <li
          style={{ color: "red", fontSize: "16px", fontWeight: "600", cursor:"pointer" }}
          onClick={handleDelete}
        >
          Delete Post
        </li>
      );
    }
    return null;
  };

  var comdata = phonenumber + date;
  var a = 0;
  return (
    <div className="tweetcard">
      <div className="tweet-user-info">
        <div className="tweet-data">
          <div className="user-pic">
            <img src={img} alt="" />
          </div>
          <div className="user-tag">
            <p>
              {name}{" "}
              <span
                style={{ color: "#1DA1F2", fontSize: "14px" }}
                className=".userphone"
              >
                @{phonenumber}{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="user-tweet">{tweet}</div>
      </div>
      {/* <div className="like">
        <BsSuitHeart />
        <span> 5.2k</span>
      </div> */}
      <div className="tweet-img">
        <img src={addimgUrl} alt="" />
      </div>
      <br />
      <div>
        <ul className="like-comment">
          <li>
            <AiOutlineHeart />
            <span></span>
          </li>
          <li>
            <Com comdata={comdata} />
          </li>
          {renderDeleteOption()}
        </ul>
      </div>
      <br />
      <div className="hr-bottom"></div>
    </div>
  );
};

export default TweetCard;

