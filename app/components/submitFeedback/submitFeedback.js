"use client";

import React, { useState } from "react";
import Comment from "../feedbackComment/comment";
import FeedbackRating from "../feedbackRating/FeedbackRating";

const SubmitFeedback = ({ handleFeedback }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    handleFeedback({ rating, comment });
    if (!comment) {
      setError("Please enter comment to submit.");
    }
  };

  const setData = (data) => {
    console.log(data);
    setComment(data);
  };

  return (
    <>
      <Comment comment={comment} setComment={setData} />
      <FeedbackRating rating={rating} setRating={setRating} />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={submitForm}
      >
        Submit
      </button>
        {error && (
            <div className="usa-alert usa-alert--error" role="alert">
            <div className="usa-alert__body">
              <h4 className="usa-alert__heading">Error </h4>
              <p className="usa-alert__text">
            
            {error}
            </p>
            </div>
            </div>
          )}
    </>
  );
};

export default SubmitFeedback;
