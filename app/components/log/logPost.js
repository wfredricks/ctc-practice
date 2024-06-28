"use client";
import React from "react";

const LogPost = ({ log }) => {
  return (
    <div style={{padding:"1rem",
    // borderRadius:"7px", outline:"1px solid #777", backgroundColor:"#CCC",
    display: "flex", justifyContent: "space-between"}}>
      <div style={{flexGrow:"0", marginLeft:"1rem"}}>{log.user}</div>
      <div style={{flexGrow:"1", marginLeft:"1rem"}}>{log.message}</div>
      <div style={{flexGrow:"0", marginLeft:"1rem"}}>{log.timestamp}</div>
    </div>
  );
};

export default LogPost;