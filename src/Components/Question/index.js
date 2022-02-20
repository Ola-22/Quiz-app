import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../ErrorMessage";

export default function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
      setError(false);
    }
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  return (
    <div className="question-container">
      <h1>Question {currQues + 1}</h1>
      <div className="question-card">
        <h2>{questions[currQues]?.question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                disabled={selected}
                key={i}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="btn">
          <button onClick={() => handleQuit()}>Quit</button>
          <button onClick={() => handleNext()}>Next Question</button>
        </div>
      </div>
    </div>
  );
}
