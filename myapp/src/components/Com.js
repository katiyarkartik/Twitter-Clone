import React, { useState } from "react";
import "./CommentSection.css";
import CommentSection from "./CommentSection";
import { FaRegCommentDots } from "react-icons/fa";
function Com({ comdata }) {
  const initialComments = [
    // "This is a great post!",
    // "I love this photo!",
    // "Amazing!",
    comdata,
    //import the phonenumber and date of the post
    //fetch all comments
    //now show only the comments where commentid== phonenumber+date
  ];

  const [commentSectionVisible, setCommentSectionVisible] = useState(false);

  const toggleCommentSectionVisibility = () => {
    setCommentSectionVisible(!commentSectionVisible);
  };

  return (
    <div className="com">
      {/* {comdata} */}
      <div className="post">{/* Your post content */}</div>
      <div onClick={toggleCommentSectionVisibility}>
        {commentSectionVisible ? "Hide Comments" : <FaRegCommentDots />}
      </div>
      {commentSectionVisible && (
        <CommentSection
          comdata={comdata}
          comments={initialComments}
          onClose={toggleCommentSectionVisibility}
        />
      )}
    </div>
  );
}

export default Com;
