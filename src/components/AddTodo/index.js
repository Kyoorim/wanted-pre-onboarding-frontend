import { useRef } from 'react';
import { apiService } from '../../apis';
import Button from '../Layout/Button';

const AddTodo = () => {
	const todoRef = useRef('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const todo = {
			todo: todoRef.current.value,
			isCompleted: false,
		};

		const enteredTodoIsValid = String(todo.text).trim() !== '';

		let formIsValid = false;
		if (enteredTodoIsValid) formIsValid = true;
		if (!formIsValid) return;

		await apiService.postTodos(todo);
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				placeholder="오늘의 할 일을 입력하세요"
				ref={todoRef}
			/>
			<Button type="submit">제출</Button>
		</form>
	);
};

export default AddTodo;
