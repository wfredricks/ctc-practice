"use client";
import React from "react";

const Comment = ({ comment, setComment }) => {
  const handleFeedback = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  return (
    <div className="grid-container usa-section">
      <div className="usa-form">
        <label htmlFor="comment-input" className="usa-label">
          Enter Your Feedback
        </label>
        <textarea
          className="usa-textarea"
          id="comment-input"
          value={comment}
          onChange={handleFeedback}
          placeholder="Enter feedback here"
        ></textarea>
      </div>
    </div>
  );
};

export default Comment;
