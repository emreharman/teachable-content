import axios from "axios";

const model = {
  getComments: async (id) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
};
export default model;
