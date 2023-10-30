import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}read/`;

class ReadService {
  read(postId) {
    return axios.post(
      API_URL + "create",
      { postId },
      { headers: authHeader() }
    );
  }
}

export default new ReadService();
