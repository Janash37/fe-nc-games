import { Link } from "react-router-dom";

export default function ReviewsHome() {
  return (
    <section id="reviews-homepage">
      <p id="review-text">Filter board game reviews by: </p>
      <div id="review-links-1">
        <Link className="review-home-link" to="/reviews/deck-building">
          Deck-building
        </Link>
        <Link className="review-home-link" to="/reviews/dexterity">
          Dexterity Games
        </Link>
        <Link className="review-home-link" to="/reviews/engine-building">
          Engine-building
        </Link>
        <Link className="review-home-link" to="/reviews/hidden-roles">
          Hidden Roles
        </Link>
        <Link className="review-home-link" to="/reviews/push-your-luck">
          Push Your Luck
        </Link>
        <Link className="review-home-link" to="/reviews/roll-and-write">
          Roll-and-Write
        </Link>
        <Link className="review-home-link" to="/reviews/strategy">
          Strategy
        </Link>
      </div>
      <p>
        Or <Link to="/reviews/all">view all</Link>
      </p>
    </section>
  );
}
