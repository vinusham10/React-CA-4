import React from "react";

const Quiz = ({
  question,
  answers,
  selectedAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="quiz">
      <h2 className="quiz__question">{question}</h2>
      <ul className="quiz__answers">
        {answers.map((answer, index) => (
          <li key={index} className="quiz__answer">
            <button
              className="quiz__button"
              onClick={() => selectedAnswer(index)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p className="quiz__current-question">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </div>
  );
};

export default Quiz;