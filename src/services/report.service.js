import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}reports/`;

class ReportService {
  getPostDetails({ postId }) {
    return axios.get(API_URL + postId, {
      headers: authHeader(),
    });
  }
  async getReportComment({ currentPage, pageSize, searchString }) {
    return await axios.get(
      API_URL +
        "reportComment" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }`,
      {
        headers: authHeader(),
      }
    );
  }
  async getReportPost({ currentPage, pageSize, searchString }) {
    return await axios.get(
      API_URL +
        "reportPost" +
        `?page=${currentPage}&size=${pageSize}&searchString=${
          searchString || ""
        }`,
      {
        headers: authHeader(),
      }
    );
  }
}

export default new ReportService();
