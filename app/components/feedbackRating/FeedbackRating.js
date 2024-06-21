'use client'
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

function FeedbackRating() {
    const [rating, setRating] = useState("");

    // TODO JLW - add prop for parent to use for state management
    // TODO JLW - add validation check to make sure it's not null
    return (
        <Rating name="feedback-rating" value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
    )
}

export default FeedbackRating