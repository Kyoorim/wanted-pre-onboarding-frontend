import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TodoList from './pages/TodoList';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth/signin" element={<Signin />} />
				<Route path="/auth/signup" element={<Signup />} />
				<Route path="/todos" element={<TodoList />} />
			</Routes>
		</BrowserRouter>
	);
}
