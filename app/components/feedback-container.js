"use client";

import React from 'react'
import SubmitFeedback from './submitFeedback/submitFeedback';

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
            <div>
                <SubmitFeedback rating={rating} comment={message} />
            </div>
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