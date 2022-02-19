import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Quiz App</Link>
      <hr />
    </div>
  );
}
