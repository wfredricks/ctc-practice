"use client";

import React from "react";
import SubmitFeedback from "./submitFeedback/submitFeedback";

export function FeedbackContainer() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleFeedback = async ({ rating, comment }) => {
    const pageUrl = window.location.href;
    const body = {
      rating: rating ?? 5,
      message: comment ?? "test",
      userid: "1234",
      url: pageUrl,
    };

    await fetch("/api/feedback", {
      method: "post",
      body: JSON.stringify(body),
    });
  };

  return (
    <>
      <div
        onClick={() => setShowFeedback(!showFeedback)}
        style={{
          position: "fixed",
          right: "0px",
          top: "0px",
          bottom: "0px",
          maxWidth: "33vw",
        }}
      >
        <div>...</div>
      </div>
      {showFeedback && (
        <>
          <SubmitFeedback handleFeedback={handleFeedback} />
          <div>comments</div>
        </>
      )}
    </>
  );
}
