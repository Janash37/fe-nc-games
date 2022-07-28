import { getAllReviews, getReviewsByCategory } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import SortedRevs from "./SortedRevs";

export default function ReviewsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState("");
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const query = useLocation();

  function changeSortOrder(event) {
    if (query.search.includes("category")) {
      setData(`${query.search}&${event.target.value}`);
    } else {
      setData(`?${event.target.value}`);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getAllReviews(data).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [data]);

  return (
    <section id="reviews-homepage">
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : (
        <div>
          <p className="review-text">
            See what our users are saying about these games!
          </p>
          <SortedRevs sortOption={changeSortOrder} />
          <ul className="reviews-list">
            {reviews.map((review) => {
              return (
                <li id="all-reviews-li" key={review.review_id}>
                  <p>
                    <strong>{review.title}</strong>
                  </p>
                  <p>By: {review.owner}</p>
                  <p id="review-body">
                    {review.review_body.slice(0, 150) + "..."}
                  </p>
                  <Link to={`/reviews/review/${review.review_id}`}>
                    <button id="btn-read-more">Read more!</button>
                  </Link>
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
