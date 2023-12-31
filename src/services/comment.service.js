import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}comments/`;

class CommentService {
  async createComment({ content, postID }) {
    try {
      const response = await axios.post(
        API_URL + "create",
        { content, postID },
        { headers: authHeader() }
      );
      return response.data;
    } catch (erorr) {
      return erorr;
    }
  }

  deleteComment(commentID) {
    return axios.delete(API_URL + "delete", {
      headers: authHeader(),
      params: {
        commentID,
      },
    });
  }
}

export default new CommentService();
