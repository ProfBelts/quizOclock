import React from "react";

export default function FinishScreen({
  points,
  numQuestions,
  highscore,
  dispatch,
}) {
  const percentage = (points / numQuestions) * 100;

  return (
    <>
      <p className="result">
        You scored {points} out of {numQuestions} ({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highscore">
        (Highscore: {highscore}{" "}
        {highscore === 0 || highscore === 1 ? "point" : "points"})
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        {" "}
        Restart Quiz{" "}
      </button>
    </>
  );
}
