import React from "react";
import Options from "./Options";
import he from "he";
export default function Questions({ questions, dispatch, answer }) {
  const decodedQuestion = he.decode(questions.question);
  //   const question = questions.question;

  //   console.log(questions);

  return (
    <div>
      <h4>{decodedQuestion}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}
