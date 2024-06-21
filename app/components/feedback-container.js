"use client";

import React from "react";
import './feedback-container.css';

export function FeedbackContainer() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleFeedback = async ({ rating, message }) => {
    const pageUrl = window.location.href;
    const body = {
      rating: rating,
      message: message,
      userid: "1234",
      url: pageUrl,
    };

    await fetch("/api/feedback", body);
  };

  handleFeedback({ rating: 5, message: "Great job!" });

  return (
    <>
      <div onClick={() => setShowFeedback(!showFeedback)} style={{"position":"fixed", "right":"0px", "top":"0px", "bottom":"0px", "maxWidth":"33vw", "display": "flex"}}>
        <div style={{"display":"inline-block", "height":"100%", "background-color": "aquamarine"}}>...</div>
        {showFeedback && (
        <div id="pastComments">
          <div>commment</div>
          <div>comments</div>
        </div>
      )}
      </div>
    </>
  );
}
