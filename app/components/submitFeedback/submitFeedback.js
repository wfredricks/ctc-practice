import React from 'react'
import Comment from '../feedbackComment/comment';
import FeedbackRating from '../feedbackRating/FeedbackRating';

const SubmitFeedback = ({ rating, comment }) => {
    // const [rating, setRating] = useState("");
    // const [comment, setComment] = useState("");


    // WIP JLW - combine with above func
    const submitForm = async () => {
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });

            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setComment(data.validateComment || "feedback is successfully  submit");
            setError("");
        } catch (error) {
            setError(
                "Couldn't validate the feedback: " + (error.message || "Unknown error")
            );
            setComment("");
            console.error("Response error:", error);
        }
    };

    {/* TODO JLW - switch to use materialUI button */ }
    return (
        <>
            <Comment comment={comment} />
            <FeedbackRating rating={rating} />
            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={submitForm} >
                Submit
            </button >
        </>
    )
}

export default SubmitFeedback