import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button onClick={() => console.log("View upcoming sessions")}>
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
