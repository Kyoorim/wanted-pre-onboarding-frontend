import axios from 'axios';

const apiRoot = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const SignUp = async (form) => {
	try {
		const response = await axios.post('/auth/signup', form, {
			withCredentials: true,
		});
		alert('회원가입 성공');
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
		localStorage.setItem('token', token);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const getTodos = async () => {
	const access_token = localStorage.getItem('token');
	try {
		const response = await axios.get('/todos', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return response;
	} catch (err) {
		alert(err);
	}
};

export const postTodos = async (todoForm) => {
	const access_token = localStorage.getItem('token');
	try {
		const response = await axios.post('/todos', todoForm, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return response;
	} catch (err) {
		alert(err);
	}
};

export const upDateTodos = async (updateForm, id) => {
	const access_token = localStorage.getItem('token');
	try {
		const response = await axios.put(`/todos/${id}`, updateForm, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return response;
	} catch (err) {
		alert(err);
	}
};

export const deleteTodos = async (id) => {
	const access_token = localStorage.getItem('token');
	try {
		const response = await axios.delete(`/todos/${id}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return response;
	} catch (err) {
		alert(err);
	}
};

export const apiService = {
	SignUp,
	SignIn,
	getTodos,
	postTodos,
	upDateTodos,
	deleteTodos,
};
