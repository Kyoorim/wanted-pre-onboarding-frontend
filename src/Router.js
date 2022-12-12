import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TodoList from './pages/TodoList';

export default function Router({ isLoggedIn }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{!isLoggedIn && <Route path="/auth/signin" element={<Signin />} />}
				{!isLoggedIn && <Route path="/auth/signup" element={<Signup />} />}
				{isLoggedIn && <Route path="/todos" element={<TodoList />} />}

				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
