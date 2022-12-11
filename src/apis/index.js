import axios from 'axios';
import jwt_decode from 'jwt-decode';

const apiRoot = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const SignUp = async (form) => {
	try {
		const response = await axios.post('/auth/signup', form, {
			withCredentials: true,
		});
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const SignIn = async (form) => {
	try {
		const response = await axios.post('/auth/signin', form, {
			withCredentials: true,
		});
		const token = response.data.access_token;
		const decodedUserInfo = jwt_decode(token);
		localStorage.setItem('userInfo', JSON.stringify(decodedUserInfo));
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const apiService = {
	SignUp,
	SignIn,
};
