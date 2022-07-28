import { useState } from "react";

export const PostComment = ({ submitBtn, handleSubmit }) => {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <>
      <form
        id="add-comment-form"
        onSubmit={onSubmit}
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
      >
        <header id="form-header">Want to add your own comment?</header>
        <input type="text" id="user-comment" name="user-comment" />
        <button id="comment-submit-btn">{submitBtn}</button>
      </form>
    </>
  );
};
