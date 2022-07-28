import React from "react";

const View = ({
  post,
  commentShow,
  handleShowButton,
  commentsLoading,
  comments,
}) => {
  return (
    <div>
      <hr />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {commentsLoading ? (
        <p>Loading Comments</p>
      ) : (
        <button onClick={handleShowButton}>
          {commentShow ? "Hide Comments" : `Show Comments`}
        </button>
      )}

      {commentShow && !commentsLoading && (
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>
                <b>{comment.email}</b>
                <span>{comment.body}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
};

export default View;
