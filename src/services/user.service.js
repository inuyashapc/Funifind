import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_URL = `${BASE_URL}users/`;

class UserService {
	getUserById(id) {
		return axios.get(API_URL + id)
	}
}

export default new UserService();
