import { getReviewById } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ReviewsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById().then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  return (
    <section id="reviews-homepage">This is the individual review page!</section>
  );
}
