import React, { useEffect, useState } from "react";
import View from "./view";
import model from "./model";

const SinglePostController = ({ post }) => {
  const [commentShow, setCommentShow] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {}, []);

  const handleShowButton = () => {
    setCommentShow(!commentShow);
    if (commentShow === false) {
      setCommentsLoading(true);
      model
        .getComments(post.id)
        .then((res) => {
          setTimeout(() => {
            setCommentsLoading(false);
            setComments(res);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <View
      post={post}
      commentShow={commentShow}
      handleShowButton={handleShowButton}
      comments={comments}
      commentsLoading={commentsLoading}
    />
  );
};

export default SinglePostController;
