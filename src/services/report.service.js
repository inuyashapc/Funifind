import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}reports/`;

class ReportService {
	reportPost(params) {
		return axios.post(
			API_URL + "reportPost",
			params,
			{
				headers: authHeader(),
			}
		);
	}


}

export default new ReportService();
