import { Link } from "react-router-dom";
import { useContext } from "react";

export default function NavBar() {
  return (
    <section id="nav-bar">
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
  );
}
