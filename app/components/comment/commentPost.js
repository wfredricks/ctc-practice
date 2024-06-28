"use client";
import React from "react";

const CommentPost = ({ comment }) => {
  return (
    <div style={{padding:"1rem",borderRadius:"7px", outline:"1px solid #777", backgroundColor:"#CCC"}}>
      <div>{comment.date}</div>
      <div>{comment.message}</div>
    </div>
  );
};

export default CommentPost;