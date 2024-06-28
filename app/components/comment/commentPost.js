"use client";
import React from "react";

const CommentPost = ({ comment }) => {
  return (
    <div style={{padding:"1rem",borderRadius:"7px", outline:"1px solid #777", backgroundColor:"#CCC", display: "flex", justifyContent: "space-between"}}>
      <div style={{flexGrow:"1"}}>{comment.message}</div>
      <div style={{flexGrow:"0"}}>{comment.date}</div>
    </div>
  );
};

export default CommentPost;