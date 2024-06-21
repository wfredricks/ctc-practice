'use client';

import React from 'react'

import Comment from '../components/feedbackComment/comment'
import FeedbackRating from '../components/feedbackRating/FeedbackRating'

function Home() {

  const submitForm = () => {
    // WIP JLW - get this working
    // try {
    //   const response = await fetch("", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ comment }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP status ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log(data);
    //   setComment(data.validateComment || "feedback is successfully  submit");
    //   setError("");
    // } catch (error) {
    //   setError(
    //     "Couldn't validate the feedback: " + (error.message || "Unknown error")
    //   );
    //   setComment("");
    //   console.error("Response error:", error);
    // }
  };

  return (
    <>
      <Comment />
      <FeedbackRating />
      {/* TODO JLW - switch to use materialUI button */}
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={submitForm}>
        Submit
      </button>
    </>

  )

}
export default Home