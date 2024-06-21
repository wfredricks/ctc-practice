'use client'
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

function Feedback() {
    const [rating, setRating] = useState("");
    const [feedback, setFeedback] = useState("");
    //const [request, setRequest] = useState(null);

    const submitForm = () => {
        const invalidRating = !rating;
        const invalidSubmit = !feedback;

        if (invalidRating && invalidSubmit) {
            window.alert('Oops! Looks like we are missing both your feedback and rating.')
        }

        if (invalidRating || invalidSubmit) {
            const missingInput = invalidRating ? 'rating' : 'feedback';
            window.alert('Oops! Looks like we are missing your ' + missingInput);
        }

        // submit form

    }

    return (
        <>
            <Rating name="feedback-rating" value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
            {/* child component for feedback */}
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={submitForm}>
                Submit
            </button>
        </>
    )
}

export default Feedback