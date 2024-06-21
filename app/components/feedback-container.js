"use client";

import React from "react";

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
      <button onClick={() => setShowFeedback(!showFeedback)}>
        Add Comment
      </button>
      {showFeedback && (
        <>
          <div>commment</div>
          <div>comments</div>
        </>
      )}
    </>
  );
}
