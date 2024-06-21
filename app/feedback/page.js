'use client'
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

function Feedback() {
    const [rating, setRating] = useState("");
    return (
        <Rating name="feedback-rating" value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
    )
}

export default Feedback