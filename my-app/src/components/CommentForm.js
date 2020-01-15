// src/components/CommentForm.js

import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(comment);
      }}
      className="CommentForm"
    >
      <textarea
        className="CommentForm__Textarea"
        placeholder="Enter your comment..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        name="comment"
      />
      <div className="CommentForm__Actions">
        <button className="CommentForm__Submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;