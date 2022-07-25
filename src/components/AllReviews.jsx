import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";

export default function ReviewsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <section id="reviews-homepage">
      {isLoading ? (
        <p>Loading reviews..</p>
      ) : (
        <div>
          <ul id="all-reviews-list">
            {reviews.map((review) => {
              return (
                <li id="all-reviews-li" key={review.created_at}>
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
        </div>
      )}
    </section>
  );
}
