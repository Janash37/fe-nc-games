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
      <p>
        Get started by heading to our <Link to="/reviews">Game Reviews </Link>
        section.
      </p>
    </section>
  );
}
