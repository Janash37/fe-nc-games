import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function NavBar() {
  return (
    <section id="nav-bar">
      <section id="nav-bar-top">
        <Link className="navbar-link" to="/">
          <strong>{"Home"}</strong>
        </Link>
        <Link className="navbar-link" to="/reviews">
          <strong>{"Game Reviews"}</strong>
        </Link>
        <Link className="navbar-link" to="/profile">
          <strong>{"Profile"}</strong>
        </Link>
      </section>
      <section id="nav-bar-bottom">
        Logged in as: {`${UserContext._currentValue}`}
      </section>
    </section>
  );
}
