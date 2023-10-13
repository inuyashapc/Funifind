import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/reports/";

class ReportService {
  getPostDetails({ postId }) {
    return axios.get(API_URL + postId, {
      headers: authHeader(),
    });
  }
  async getReportComment({ startIndex, size }) {
    return await axios.get(API_URL + "reportComment" + `?page=${1}&size=${5}`, {
      headers: authHeader(),
    });
  }
  async getReportPost({ startIndex, size }) {
    return await axios.get(API_URL + "reportPost" + `?page=${1}&size=${5}`, {
      headers: authHeader(),
    });
  }
}

export default new ReportService();
