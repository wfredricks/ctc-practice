"use client";

import React, { useState } from "react";
import Comment from "../feedbackComment/comment";
import FeedbackRating from "../feedbackRating/FeedbackRating";

const SubmitFeedback = ({ handleFeedback }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    handleFeedback({ rating, comment });
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
    </>
  );
};

export default SubmitFeedback;
