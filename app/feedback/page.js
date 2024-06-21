import React from 'react'

function Feedback() {
    const [rating, setRating] = useState("");
    return (
        <Rating name="feedback-rating" value={rating} onChange={(event, newValue) => { setValue(newValue); }} />
    )
}

export default Feedback