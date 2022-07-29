import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import SortedRevs from "./SortedRevs";

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();

  function changeSortOrder(event) {
    const dropDownValue = event.target.value;
    if (dropDownValue === "newest") {
      setSearchParams({
        sort_by: "created_at",
        order: "desc",
      });
    } else if (dropDownValue === "oldest") {
      setSearchParams({
        sort_by: "created_at",
        order: "asc",
      });
    } else if (dropDownValue === "mostComms") {
      setSearchParams({
        sort_by: "comment_count",
        order: "desc",
      });
    } else if (dropDownValue === "leastComms") {
      setSearchParams({
        sort_by: "comment_count",
        order: "asc",
      });
    } else if (dropDownValue === "mostVotes") {
      setSearchParams({
        sort_by: "votes",
        order: "desc",
      });
    } else if (dropDownValue === "leastVotes") {
      setSearchParams({
        sort_by: "votes",
        order: "asc",
      });
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getAllReviews(searchParams, category).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [searchParams]);

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
                  <p id="review-title">
                    <strong>{review.title}</strong>
                  </p>
                  <p id="review-author">By: {review.owner}</p>
                  <p id="review-date">{review.created_at.slice(0, 10)}</p>
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
