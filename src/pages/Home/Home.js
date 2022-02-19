import "./style.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ name, setName, fetchQuestions }) {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="home-container">
      <div>
        <span style={{ fontSize: "30px" }}>Quiz Settings</span>

        <div className="select">
          {error && <div className="error">Please Fill all the Fields</div>}

          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <select
            placeholder="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          <select
            placeholder="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={handleSubmit}>Start Quiz</button>
        </div>
      </div>
      <img src="/quiz.svg" alt="" />
    </div>
  );
}
