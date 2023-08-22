import React, { useState } from "react";
import "./CommentSection.css";
import { IoMdSend } from "react-icons/io";
import dp from "../images/dp.jpg";
import axios from "axios";
import { useEffect } from "react";
const CommentSection = ({ comments, onClose, comdata }) => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  var commentor = userInfo.phonenumber;
  var commentorimg = userInfo.img;

  async function handleSubmitComment(event) {
    setNewComment("");
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const comobj = {
      commentid: comdata,
      comment: newComment,
      phonenumber: commentor,
      img: commentorimg,
    };

    console.log(newComment);
    console.log(commentor);
    const { commentdata } = await axios.post("/addcomment", comobj, config);

    console.log(commentdata);
    alert("comment added");
    // window.location.reload(false);
  }

  const [coms, setcoms] = useState([{}]);
  useEffect(() => {
    axios
      .get("/comments")
      .then(({ data }) => {
        if (data) {
          return data;
        }
      })
      .then((result) => setcoms(result));

    console.log(coms);
  }, []);

  return (
    <div className="comment-section">
      
      <div className="comment-section-header">
        <h3>Comments</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="add-com">
        <div className="img-comment-user">
          <img src={userInfo.img} alt="" srcset="" />
        </div>
        <div className="com-box">
          <input
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
        </div>
        <div className="post-comment-btn">
          <div className="post-button" onClick={handleSubmitComment}>
            <IoMdSend />
          </div>
        </div>
      </div>

      <ul></ul>
      <div className="loaded-comments">
        {coms.map((commentel) => (

          <ul>
          {comdata===commentel.commentid&&(
            <li>
              <div className="comment-el">
                
                <div className="user-comment-data">
                  <div className="comment-profile-img">
                    <img src={commentel.img} alt="" />
                  </div>
                  <div className="comment-phonenumber">
                    <p>{commentel.phonenumber}</p>
                  </div>
                </div>
                <div className="user-comment">{commentel.comment}</div>
              </div>
            </li>)}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
