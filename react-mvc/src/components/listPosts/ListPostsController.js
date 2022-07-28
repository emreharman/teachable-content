import React, { useState, useEffect } from "react";
import ListPostsModel from "./ListPostsModel";
import ListPostsView from "./ListPostsView";

const ListPostsController = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    ListPostsModel.getPosts()
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setPosts(res);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ListPostsView loading={loading} posts={posts} />;
};

export default ListPostsController;
