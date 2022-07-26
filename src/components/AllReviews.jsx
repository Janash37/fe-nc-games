import { getAllReviews, getReviewsByCategory } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ReviewsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!category) {
      getAllReviews().then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      });
    } else {
      getReviewsByCategory(category).then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <section id="reviews-homepage">
      {isLoading ? (
        <p>Loading reviews..</p>
      ) : (
        <div>
          <p className="review-text">
            See what our users are saying about these games!
          </p>
          <ul className="reviews-list">
            {reviews.map((review) => {
              return (
                <li id="all-reviews-li" key={review.review_id}>
                  <p>
                    <strong>{review.title}</strong>
                  </p>
                  <p>By: {review.owner}</p>
                  <p id="review-body">{review.review_body}</p>
                  <p>Votes: {review.votes}</p>
                </li>
              );
            })}
          </ul>
          <Link to="/reviews">
            <button className="back-button">Back</button>
          </Link>
        </div>
      )}
    </section>
  );
}
