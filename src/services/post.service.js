import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}posts/`;

class PostService {
  getAllPost() {
    return axios.get(API_URL + "all", { headers: authHeader() });
  }

  getAllPostWithPagination({
    currentPage,
    pageSize,
    searchString,
    location,
    userId,
  }) {
    return axios.get(
      API_URL +
        "list" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }&location=${location != 1 ? location : ""}&userId=${userId}`,
      {
        headers: authHeader(),
      }
    );
  }
  getAllPostUserWithPagination({
    currentPage,
    pageSize,
    searchString,
    location,
  }) {
    return axios.get(
      API_URL +
        "list" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }&location=${location != 1 ? location : ""}`,
      {
        headers: authHeader(),
      }
    );
  }

  getBannedPost({ currentPage, pageSize, searchString, location }) {
    return axios.get(
      API_URL +
        "listBan" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }&location=${location != "Khu vực" ? location : ""}`,
      {
        headers: authHeader(),
      }
    );
  }
  async createPost(content, location) {
    try {
      if (location != 1) {
        const response = await axios.post(
          API_URL + "create",
          { content, location },
          { headers: authHeader() }
        );
        return response.data;
      } else {
        const response = await axios.post(
          API_URL + "create",
          { content },
          { headers: authHeader() }
        );
        return response.data;
      }
    } catch (erorr) {
      return erorr;
    }
  }

  deletePost(postID) {
    return axios.delete(API_URL + "delete", {
      headers: authHeader(),
      params: {
        postID,
      },
    });
  }

  getListPostPending({ currentPage, pageSize, searchString }) {
    return axios.get(
      API_URL +
        "listPending" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }`,
      {
        headers: authHeader(),
      }
    );
  }

  approve({ isApprove, postID, refuseReason }) {
    return axios.post(
      API_URL + "approve",
      { isApprove, postID, refuseReason },
      {
        headers: authHeader(),
      }
    );
  }

  getPostDetails({ postId, userId }) {
    return axios.get(
      API_URL + postId,
      { userId },
      {
        headers: authHeader(),
      }
    );
  }

  banPost(postId) {
    return axios.put(
      API_URL + `ban`,
      {
        postID: postId,
      },
      {
        headers: authHeader(),
      }
    );
  }
  unBanPost(postId) {
    return axios.put(
      API_URL + `unban`,
      {
        postID: postId,
      },
      {
        headers: authHeader(),
      }
    );
  }
}

export default new PostService();
