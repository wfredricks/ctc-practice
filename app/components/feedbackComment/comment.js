"use client";
import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [validatedComment, setValidComment] = useState("");
  const [error, setError] = useState("");

  const validateComment = async () => {
    // Check if the comment is empty
    if (!comment) {
      setError("Please enter your feedback.");
      setComment("");
      return;
    }
  };

  return (
    <>
      <div className="grid-container usa-section">
        <div className="usa-form">
          <label htmlFor="comment-input" className="usa-label">
            Enter Your Feedback
          </label>
          <textarea
            className="usa-textarea"
            id="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value.trimStart())}
            placeholder="Enter feedback here"
          ></textarea>
          {/* <button className="usa-button" onClick={validateComment}>
            Submit
          </button> */}
          {validatedComment && (
            <div class="usa-alert usa-alert--success">
              <div class="usa-alert__body">
                <h4 class="usa-alert__heading">Success </h4>
                <p class="usa-alert__text">
                  <strong>VALID:</strong> {validatedComment}
                </p>
              </div>
            </div>
          )}
          {error && (
            <div class="usa-alert usa-alert--error" role="alert">
              <div class="usa-alert__body">
                <h4 class="usa-alert__heading">Error </h4>
                <p class="usa-alert__text">

                  {error}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
