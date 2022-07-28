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
        <div id="submit-div">
          <textarea
            type="text"
            id="user-comment"
            name="user-comment"
            onChange={(event) => setText(event.target.value)}
            required
          />
          <button id="comment-submit-btn">{submitBtn}</button>
        </div>
      </form>
    </section>
  );
};
