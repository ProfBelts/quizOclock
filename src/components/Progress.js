import React from "react";

export default function Progress({ index, numQuestions, points, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question {index + 1}/ {numQuestions}{" "}
      </p>
      <p>
        {" "}
        Points: {points} / {numQuestions}
      </p>
    </header>
  );
}
