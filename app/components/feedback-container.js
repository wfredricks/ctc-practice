"use client";

import React, { useState } from 'react'
import SubmitFeedback from './submitFeedback/submitFeedback';

export function FeedbackContainer() {
    const [showFeedback, setShowFeedback] = React.useState(false);
    const [feedbackRating, setRating] = useState('');
    const [feedbackMessage, setMessage] = useState('');

    const handleFeedback = async ({ rating, message }) => {
        const pageUrl = window.location.href;
        const body = {
            rating: rating,
            message: message,
            userid: "1234",
            url: pageUrl,
        };

        if (feedbackRating !== rating) {
            setRating(rating);
        }

        if (feedbackMessage !== message) {
            setMessage(message);
        }

        await fetch("/api/feedback", body);
    };

    handleFeedback({ rating: 5, message: "Great job!" });

    return (
        <>
            <SubmitFeedback rating={feedbackRating} comment={feedbackMessage} />

            <div onClick={() => setShowFeedback(!showFeedback)} style={{ "position": "fixed", "right": "0px", "top": "0px", "bottom": "0px", "maxWidth": "33vw" }}>
                <div>...</div>
                {showFeedback && (
                    <>
                        <div>commment</div>
                        <div>comments</div>
                    </>
                )}
            </div>
        </>
    );
}
