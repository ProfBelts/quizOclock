import React from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2> How Smart Are You? </h2>
      <h3> {numQuestions} Questions to test your knowledge </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {" "}
        Let's Start
      </button>
    </div>
  );
}
