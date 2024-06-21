'use client'
import React from 'react';
import Rating from '@mui/material/Rating';

function FeedbackRating({ rating }) {
    // TODO JLW - add validation check to make sure it's not null
    return (
        <Rating name="feedback-rating" value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
    )
}

export default FeedbackRating