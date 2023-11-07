import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}notifications/`;

class NotificationService {
  async createNotifications({ content, uri, userId }) {
    try {
      const response = await axios.post(
        API_URL + "create",
        { content, uri, userId },
        { headers: authHeader() }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new NotificationService();
