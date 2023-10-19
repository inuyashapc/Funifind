import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}interactions/`;

class InteractionService {
  interactWithPost({ postID, typeInteract }) {
    return axios.post(
      API_URL + "interact",
      { postID, typeInteract },
      {
        headers: authHeader(),
      }
    );
  }
}

export default new InteractionService();
