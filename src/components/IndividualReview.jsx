import { getReviewById, getReviewComments } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { moment } from "moment";

export default function ReviewsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(null);
  const { review_id } = useParams();

  const [error, setError] = useState(false);
  const [errCode, setErrCode] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((review) => {
        setReview(review);
        setVotes(review.votes);
        getReviewComments(review_id).then((comments) => {
          setComments(comments);
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        if (err.response.status === 400) {
          setErrCode(400);
        } else if (err.response.status === 404) {
          setErrCode(404);
        }
      });
  }, []);

  const upVote = () => {
    setVotes((prevValue) => prevValue + 1);
  };

  const downVote = () => {
    setVotes((prevValue) => prevValue - 1);
  };

  if (error) {
    if (errCode === 400) {
      return (
        <div>
          <h4>Error</h4>
          <p>Bad request: Review ID must be a number</p>
        </div>
      );
    } else if (errCode === 404) {
      return (
        <div>
          <h4>Error</h4>
          <p>Invalid ID: Review ID does not yet exist!</p>
        </div>
      );
    }
  }

  return (
    <section id="indiv-review-page">
      {isLoading ? (
        <p>Loading review...</p>
      ) : (
        <>
          <div id="indiv-review-div">
            <p className="review-text">
              What does user <em>{review.owner}</em> think?
            </p>
            <p id="review-date">
              Review written: {review.created_at.slice(0, 10)}{" "}
            </p>
            <p>
              <strong>{review.title}</strong>
            </p>
            <p id="indiv-review-body">{review.review_body}</p>
            <p>Review votes: {votes}</p>
            <button id="upvote" onClick={upVote}>
              👍
            </button>{" "}
            <button id="downvote" onClick={downVote}>
              👎
            </button>
            <hr />
          </div>
          <div id="comments-div">
            <h4 id="comments-header">
              What other users are saying about {review.owner}'s review
            </h4>
            {comments.length === 0 ? (
              <p id="no-comments">No comments yet!</p>
            ) : (
              <ul className="comments-list">
                {comments.map((comment) => {
                  return (
                    <li id="comment-li" key={comment.comment_id}>
                      <p id="comment-body">{comment.body}</p>
                      <p id="comment-author">By: {comment.author}</p>
                      <p id="comment-date">{comment.created_at.slice(0, 10)}</p>
                    </li>
                  );
                })}
              </ul>
            )}
            <Link to={`/reviews/${review.category}`}>
              <button className="back-button">Back</button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
