import { useState } from "react";

export const PostComment = ({ submitBtn, handleSubmit }) => {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <section id="add-comment-section">
      <form id="add-comment-form" onSubmit={onSubmit} value={text} required>
        <header id="form-header">Want to add your own comment?</header>
        <input
          type="text"
          id="user-comment"
          name="user-comment"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          id="comment-submit-btn"
          onClick={() => {
            document.getElementById("submit-success").style.display = "show";
          }}
        >
          {submitBtn}
        </button>
      </form>
      <p id="submit-success">
        Thank you for submitting your comment! Please check back later to view
        it, once it has been approved.
      </p>
    </section>
  );
};
