"use client";
import Comment from '../components/feedbackComment/comment'
import FeedbackRating from '../components/feedbackRating/FeedbackRating'

import React from 'react'

export function FeedbackContainer() {

    const handleFeedback = async ({ rating, message }) => {
        const pageUrl = window.location.href;
        const body = {
            rating: rating,
            message: message,
            userid: '1234',
            url: pageUrl
        }

        await fetch('/api/feedback', body);
    }

    // WIP JLW - combine with above func
    // const submitForm = () => {
    //     // try {
    //     //   const response = await fetch("", {
    //     //     method: "POST",
    //     //     headers: {
    //     //       "Content-Type": "application/json",
    //     //     },
    //     //     body: JSON.stringify({ comment }),
    //     //   });

    //     //   if (!response.ok) {
    //     //     throw new Error(`HTTP status ${response.status}`);
    //     //   }

    //     //   const data = await response.json();
    //     //   console.log(data);
    //     //   setComment(data.validateComment || "feedback is successfully  submit");
    //     //   setError("");
    //     // } catch (error) {
    //     //   setError(
    //     //     "Couldn't validate the feedback: " + (error.message || "Unknown error")
    //     //   );
    //     //   setComment("");
    //     //   console.error("Response error:", error);
    //     // }
    //   };

    handleFeedback({ rating: 5, message: "Great job!" });

    return (
        <div>
            <Comment />
            <FeedbackRating />
            {/* TODO JLW - switch to use materialUI button */}
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={submitForm}>
                Submit
            </button>
        </div>
    )
}