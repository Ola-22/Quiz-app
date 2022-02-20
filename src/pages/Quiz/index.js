import { useEffect, useState } from "react";
import "./style.css";
import Question from "../../Components/Question";

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
  }, [questions, currQues]);
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
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
