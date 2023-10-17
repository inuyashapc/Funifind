import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/reports/";

class ReportService {
  getPostDetails({ postId }) {
    return axios.get(API_URL + postId, {
      headers: authHeader(),
    });
  }
  async getReportComment({ currentPage, pageSize }) {
    return await axios.get(
      API_URL + "reportComment" + `?page=${currentPage}&size=${pageSize}`,
      {
        headers: authHeader(),
      }
    );
  }
  async getReportPost({ currentPage, pageSize }) {
    return await axios.get(
      API_URL + "reportPost" + `?page=${currentPage}&size=${pageSize}`,
      {
        headers: authHeader(),
      }
    );
  }
}

export default new ReportService();
