import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}locations/`;

class LocationService {
  getAllLocation() {
    return axios.get(API_URL + "all", { headers: authHeader() });
  }

  updateLocation(id, name) {
    return axios.put(
      API_URL + `edit`,
      {
        id,
        name,
      },
      {
        headers: authHeader(),
      }
    );
  }

  deleteLocation(id) {
    return axios.delete(API_URL + `delete/${id}`, {
      headers: authHeader(),
    });
  }

  createLocation(name) {
    return axios.post(
      API_URL + "create",
      { name },
      {
        headers: authHeader(),
      }
    );
  }

  getDetailLocation(id) {
    return axios.get(API_URL + `detail/${id}`, { headers: authHeader() });
  }
}

export default new LocationService();
