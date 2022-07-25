import { selectCategory } from "../utils/api";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="homepage-intro">
      <p>
        Unsure whether to buy a board game? See what 2D6 users are saying about
        them before you part with your hard-earned cash.
      </p>
      <p>
        Browse the entire list of reviews or, if you're interested in a certain
        genre, filter by category.
      </p>
      <Link to="/reviews/all">
        <button className="home-category-button">All Reviews</button>
      </Link>
      <button className="home-category-button" onClick={selectCategory}>
        Children's
      </button>
      <button className="home-category-button" onClick={selectCategory}>
        Dexterity
      </button>
      <button className="home-category-button" onClick={selectCategory}>
        Euro Game
      </button>
      <button className="home-category-button" onClick={selectCategory}>
        Deduction
      </button>
    </section>
  );
}
