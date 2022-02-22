import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

export default function Result({ score, name }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span>Thanks {name}</span>
      <div className="title">Final Score: {score}</div>
      <Link to="/">
        <button>Go To Homepage</button>
      </Link>
    </div>
  );
}
