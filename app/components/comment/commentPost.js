"use client";
import React from "react";

const CommentPost = ({ comment }) => {
  const handleFeedback = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  return (
    <div style={{padding:"1rem",borderRadius:"7px", outline:"1px solid #777", backgroundColor:"#CCC"}}>
      <div>{comment.date}</div>
      <div>{comment.message}</div>
    </div>
  );
};

export default CommentPost;