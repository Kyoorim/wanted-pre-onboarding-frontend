import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../apis';
import AddTodo from '../../components/AddTodo';
import Todos from '../../components/Todos';
import * as S from './style';

const TodoList = () => {
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);

	const addTodoHandler = async (todoForm) => {
		await apiService.postTodos(todoForm);
		getTodoHandler();
	};

	const getTodoHandler = async () => {
		const response = await apiService.getTodos();
		setTodos(response.data);
	};

	const editTodoHandler = async (updateForm, id) => {
		await apiService.upDateTodos(updateForm, id);
		getTodoHandler();
	};

	const deleteTodoHandler = async (id) => {
		await apiService.deleteTodos(id);
		getTodoHandler();
	};

	const logoutHandler = () => {
		alert('로그아웃 하시겠습니까?');
		localStorage.clear();
		navigate('/');
	};

	useEffect(() => {
		getTodoHandler();
	}, []);

	return (
		<S.Wrapper>
			<S.Container>
				<h1>나만의 투두리스트</h1>
				<h3 onClick={logoutHandler}>로그아웃</h3>
				<AddTodo onAddTodo={addTodoHandler} />
				<ul>
					{todos.map((todo) => (
						<Todos
							key={todo.id}
							todo={todo}
							onDeleteTodo={deleteTodoHandler}
							onEditTodo={editTodoHandler}
						/>
					))}
				</ul>
			</S.Container>
		</S.Wrapper>
	);
};

export default TodoList;
