import { useState } from "react";
import { updateReviewVotes } from "../utils/api";

export const Votes = ({ votes, review_id }) => {
  const [reviewVotes, setReviewVotes] = useState(votes);

  const upVote = () => {
    setReviewVotes((reviewVotes) => reviewVotes + 1);
    updateReviewVotes(review_id, 1);
  };

  const downVote = () => {
    setReviewVotes((reviewVotes) => reviewVotes - 1);
    updateReviewVotes(review_id, -1);
  };

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
