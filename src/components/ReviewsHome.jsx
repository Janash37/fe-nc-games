import { Link } from "react-router-dom";

export default function ReviewsHome() {
  return (
    <section id="reviews-homepage">
      <p className="review-text">
        Filter board game reviews by category, or view all reviews by clicking
        the link at the bottom:
      </p>
      <div id="review-links">
        <div id="review-column-1">
          <Link className="review-cat" to="/reviews/deck-building">
            <button className="review-category-button">Deck-building 🃏</button>
          </Link>
          <Link to="/reviews/dexterity">
            <button className="review-category-button">Dexterity 🎯</button>
          </Link>
          <Link to="/reviews/engine-building">
            <button className="review-category-button">
              Engine-building 🔧
            </button>
          </Link>
          <Link to="/reviews/hidden-roles">
            <button className="review-category-button">Hidden Roles 🥷</button>
          </Link>
        </div>
        <div id="review-column-2">
          <Link to="/reviews/push-your-luck">
            <button className="review-category-button">
              Push Your Luck 🤞
            </button>
          </Link>
          <Link to="/reviews/roll-and-write">
            <button className="review-category-button">
              Roll-and-Write 🎲
            </button>
          </Link>
          <Link to="/reviews/strategy">
            <button className="review-category-button">Strategy 🤔</button>
          </Link>
          <Link to="/reviews/all">
            <button className="review-category-button">View all</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
