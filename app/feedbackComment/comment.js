"use client";
import React, { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [validatedComment, setValidComment] = useState("");
  const [error, setError] = useState("");

  // const validateComment = async () => {
  //   // Check if the comment is empty
  //   if (!comment) {
  //     setError("Please enter your feedback.");
  //     setComment("");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ comment }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP status ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setComment(data.validateComment || "feedback is successfully  submit");
  //     setError("");
  //   } catch (error) {
  //     setError(
  //       "Couldn't validate the feedback: " + (error.message || "Unknown error")
  //     );
  //     setComment("");
  //     console.error("Response error:", error);
  //   }
  // };

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
