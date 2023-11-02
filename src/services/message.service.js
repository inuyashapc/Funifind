import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}messages/`;

class MessageService {
	getListReceiver(sender) {
		return axios.get(
			API_URL + `listReceiver?sender=${sender}`,
			{ headers: authHeader() }
		);
	}
}

export default new MessageService();
