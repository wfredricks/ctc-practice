"use client";
import React from "react";

const CommentPost = ({ comments }) => {
  return (
    <div style={{padding:".5rem"}}>
    <div style={{padding:"1rem",borderRadius:"7px", outline:"1px solid #777", backgroundColor:"#CCC", display: "flex", justifyContent: "space-between"}}>
   {comments && comments.length > 0 && comments?.map((comm, index) => (
        <div key={index}>
          <div style={{ flexGrow: "1" }}>{comm.message}</div>
          <div style={{ flexGrow: "0" }}>{comm.date}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CommentPost;