import { Link } from "react-router-dom";
import { useContext } from "react";

export default function NavBar() {
  return (
    <section id="nav-bar">
      <Link className="navbar-link" to="/">
        {"Home"}
      </Link>
      <Link className="navbar-link" to="/reviews">
        {"Game Reviews"}
      </Link>
      <Link className="navbar-link" to="/">
        {"Profile"}
      </Link>
    </section>
  );
}
