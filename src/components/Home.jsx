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
      <Link to="/reviews/deck-building">
        <button className="home-category-button">Deck-building</button>
      </Link>
      <Link to="/reviews/dexterity">
        <button className="home-category-button">Dexterity</button>
      </Link>
      <button className="home-category-button">Engine-building</button>
      <button className="home-category-button">Hidden Roles</button>
      <button className="home-category-button">Push Your Luck</button>
      <button className="home-category-button">Roll-and-Write</button>
      <button className="home-category-button">Strategy</button>
    </section>
  );
}
