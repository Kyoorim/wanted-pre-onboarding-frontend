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

export const SignIn = async (form) => {
	try {
		const response = await axios.post('/auth/signin', form, {
			withCredentials: true,
		});
		const token = response.data.access_token;
		localStorage.setItem('token', token);
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const getTodos = async () => {
	try {
		const response = await axios.get('/todos');
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const postTodos = async (todo) => {
	const access_token = localStorage.getItem('token');
	try {
		const response = await axios.post('/todos', todo, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const upDateTodos = async (id) => {
	try {
		const response = await axios.put('todos/:id');
		console.log(response);
		return response;
	} catch (err) {
		alert(err);
	}
};

export const deleteTodos = async (id) => {
	try {
		const response = await axios.delete('todos/:id');
		console.log(response);
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
