import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}interactions/`;

class InteractionService {
  interactWithPost({ postID, typeInteract }) {
    if (typeInteract == 1) {
      return axios.post(
        API_URL + "/like",
        { postID },
        {
          headers: authHeader(),
        }
      );
    } else {
      return axios.delete(
        API_URL + `/dislike?postID=${postID}`,

        {
          headers: authHeader(),
        }
      );
    }
  }
}

export default new InteractionService();
