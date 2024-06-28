"use client";
import React, { useState } from "react";

const LogPost = ({ logs }) => {

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "7px",
        outline: "1px solid #777",
        backgroundColor: "#CCC",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {logs && logs.length > 0 && logs?.map((log, index) => (
        <div key={index}>
          <div style={{ flexGrow: "1" }}>{log.message}</div>
          <div style={{ flexGrow: "0" }}>{log.date}</div>
          <div style={{ flexGrow: "0" }}>{log.userid}</div>
        </div>
      ))}
    </div>
  );
};

export default LogPost;
