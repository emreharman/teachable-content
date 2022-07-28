import axios from "axios";

const ListPostsModel = {
  getPosts: async () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default ListPostsModel;
