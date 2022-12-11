import axios from 'axios';

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

export const apiService = {
	SignUp,
};
