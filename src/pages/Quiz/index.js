import { useEffect, useState } from "react";
import "./style.css";

export default function Quiz({
  name,
  questions,
  score,
  setScore,
  setQuestions,
}) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);
  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <div className="username">Welcome, {name}</div>
      {questions ? (
        <>
          <div className="quiz-info">
            <span>{questions[currQues].category}</span>
            <span>Score: {score}</span>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
