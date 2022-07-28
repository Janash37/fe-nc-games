import { useState } from "react";
import { updateReviewVotes } from "../utils/api";

export const Votes = ({ votes, review_id }) => {
  const [reviewVotes, setReviewVotes] = useState(votes);
  const [error, setError] = useState(false);

  const upVote = () => {
    setReviewVotes((reviewVotes) => reviewVotes + 1);
    updateReviewVotes(review_id, 1).catch((err) => {
      setError(true);
    });
  };

  const downVote = () => {
    setReviewVotes((reviewVotes) => reviewVotes - 1);
    updateReviewVotes(review_id, -1).catch((err) => {
      setError(true);
    });
  };

  if (error) {
    return (
      <div>
        <p>Review votes: {votes}</p>
        <button id="upvote" onClick={upVote}>
          👍
        </button>{" "}
        <button id="downvote" onClick={downVote}>
          👎
        </button>
        <p>Sorry, something went wrong. Please try voting again.</p>
      </div>
    );
  }

  return (
    <div>
      <p>Review votes: {reviewVotes}</p>
      <button id="upvote" onClick={upVote}>
        👍
      </button>{" "}
      <button id="downvote" onClick={downVote}>
        👎
      </button>
    </div>
  );
};
