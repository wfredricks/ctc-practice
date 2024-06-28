"use client";
import React, {useEffect} from "react";
import SubmitFeedback from "./submitFeedback/submitFeedback";
import "./feedback-container.css";

export function FeedbackContainer() {
  const [message, setMessage] = React.useState('');
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleFeedback = async ({ rating, comment }) => {
    const pageUrl = window.location.href;
    const body = {
      rating: rating ?? 5,
      message: comment ?? "test",
      userid: "1234",
      url: pageUrl,
    };
    if (body.message) {
      const response = await fetch("/api/feedback", {
        method: "post",
        body: JSON.stringify(body),
      });
      const {data} = await response.json();
      console.log("response", data.message);
      setMessage(data.message);
    }
  };

  // const handleGetData = async () => {
  //   const pageUrl = window.location.href;


  //   const response = await fetch("/api/getData", {
  //     method: "post",
  //     body: pageUrl,
  //   });
  //   const { data } = await response.json();
  //   console.log("response", data.message);
  //   setMessage(data.message);

  // };

  // useEffect(() => {
  //   handleGetData();
  // }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "0px",
        top: "0px",
        bottom: "0px",
        maxWidth: "33vw",
        display: "flex",
      }}
    >
      <div
        onClick={() => setShowFeedback(!showFeedback)}
        id="dots"
        style={{
          display: "inline-block",
          height: "100%",
          "backgroundColor": "aquamarine",
        }}
      >
        &#8942;
      </div>
      {showFeedback && (
        <div id="pastComments">
          <SubmitFeedback handleFeedback={handleFeedback} />
          <div>{message}</div>
          {/* <div>comments</div> */}
        </div>
      )}
    </div>
  );
}
