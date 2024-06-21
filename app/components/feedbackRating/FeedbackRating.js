"use client";
import React from "react";
import Rating from "@mui/material/Rating";

function FeedbackRating({ rating, setRating }) {
  const validateRating = (e, newVal) => {
    if (!newVal) {
      window.alert("Oops! Looks like we are missing your rating.");
    }
    setRating(newVal);
  };

  return (
    <Rating name="feedback-rating" value={rating} onChange={validateRating} />
  );
}

export default FeedbackRating;
