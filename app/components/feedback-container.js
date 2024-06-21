"use client";

import React from 'react'

export function FeedbackContainer() {
    
    const handleFeedback = async ({rating, message}) => {
        const pageUrl = window.location.href;
        const body = {
            rating: rating,
            message: message,
            date: new Date().toISOString(),
            userid: '1234',
            url: pageUrl
        }
        
        await fetch('/api/feedback', body);
    }

    handleFeedback({rating: 5, message: "Great job!"});

    return (<div>FeedbackContainers</div>)
}