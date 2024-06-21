import { useState } from "react/cjs/react.development";

const SubmitContainer = () => {
  const [request, setRequest] = useState(null);

  const submitForm = () => {
    const invalidRating = null;
    const invalidSubmit = null;

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
      {/* child component for feedback */}
      {/* child component for rating */}
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={submitForm}>
        Submit
      </button>
    </>
  )
}

export default SubmitContainer