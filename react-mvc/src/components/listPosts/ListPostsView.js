import React from "react";
import SinglePostController from "../singlePost/SinglePostController";

const ListPostsView = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading posts</h1>;
  } else {
    return (
      <div>
        {posts.map((post) => (
          <SinglePostController key={post.id} post={post} />
        ))}
      </div>
    );
  }
};

export default ListPostsView;
