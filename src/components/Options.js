import React, { useEffect, useState } from "react";
import he from "he";

export default function Options({ questions, dispatch, answer }) {
  const { correct_answer, incorrect_answers } = questions;
  const options = [correct_answer, ...incorrect_answers];
  const hasAnswered = answer !== null;

  const [shuffledOptions, setShuffledOptions] = useState(() =>
    shuffle(options)
  );

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  useEffect(() => {
    // Re-shuffle options when questions change
    const newShuffledOptions = shuffle(options);
    setShuffledOptions(newShuffledOptions);
  }, [questions]);

  return (
    <div className="options">
      {shuffledOptions.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (option === correct_answer ? "correct" : "wrong") : ""
          }`}
          key={index}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
          disabled={hasAnswered}
        >
          {he.decode(option)}
        </button>
      ))}
    </div>
  );
}
